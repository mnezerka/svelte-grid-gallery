<script>
    import Thumbnail from "./Thumbnail.svelte";
    import Lightbox from "./Lightbox.svelte";
    import { onMount, onDestroy } from "svelte";

    // properties
    export let images = []  // images to be rendered
    export let row_height = 180; // height of gallery row
    export let margin = 2; // thumbnails margin

    // state ariables
    let thumbnails = []; // current list of thumbnails (computed from images)
    let container_width = 0; // width of DOM container
    let active_image_ix = null;
    let gallery_element; // dom element of gallery
    let resize_observer; // resize observer to be notified of size changes

    onMount(() => {
        resize_observer = new ResizeObserver(entries => {
            console.log('resized', entries[0].contentRect.width)
            container_width = entries[0].contentRect.width;
            thumbnails = render_thumbs()
        })

        resize_observer.observe(gallery_element)

    })

    onDestroy(() => {
        if (resize_observer) {
            resize_observer.disconnect();
        }
    })

    /*
     The purpose of this method is to calculate
     how much should be cutted from each image
     to reduce "delta" (which represents oveflow)
     to zero.

     +---+ +-----+ +--+ +--------+
     |   | |     | |  | |        |
     +---+ +-----+ +--+ +--------+
     <.......... len ............>
      0.2    0.3    0.1    0.4
    */
    function calculate_cut_off (len, delta, items) {
        var cut_off = [];
        var cut_sum = 0;
        for(var i in items) {
            var item = items[i];
            // how much of the length is taken by this item 
            var fraction_of_len = item.scaled_width / len;
            // how much to cut off from this image (proportional part of the delta)
            cut_off[i] = Math.floor(fraction_of_len * delta);
            cut_sum += cut_off[i];
        }

        // if there is still some rest to be cutted (e.g. because of rounding)
        var still_to_cut_off = delta - cut_sum;
        while(still_to_cut_off > 0) {
            // increment cutting by one pixel for each image in a row
            for(i in cut_off) {
                cut_off[i]++;
                still_to_cut_off--;
                if (still_to_cut_off < 0) break;
            }
        }
        return cut_off;
    }

    // build single gallery row
    function build_image_row (items) {
        var row = [];
        var len = 0;
        var img_margin = 2 * margin;

        /* add images to the row if we have enough space
           where last image is added even if it overflows
           (images will be cut later)
            ---------------------------
            +---+ +-----+ +--+ +--------+
            |   | |     | |  | |        | delta
            +---+ +-----+ +--+ +--------+
            <.... container_width ....>
        */
        while(items.length > 0 && len < container_width) {
            var item = items.shift();
            row.push(item);
            len += (item.scaled_width + img_margin);
        }

        var delta = len - container_width;

        // if we need to calculate cutting due to overflow (positive delta)
        if(row.length > 0 && delta > 0) {
            var cutoff = calculate_cut_off(len, delta, row);
            for(var i in row) {
                var pixels_to_remove = cutoff[i];
                item = row[i];
                item.margin_left = -Math.abs(Math.floor(pixels_to_remove / 2));
                item.grid_width = item.scaled_width - pixels_to_remove;
            }
        }
        else {
            for(var j in row) {
                item = row[j];
                item.margin_left = 0;
                item.grid_width = item.scaled_width;
            }
        }
        return row;
    }

    // compute new width based on fixed height to keep aspec ratio
    function set_thumb_scale(item, fixed_height) {
        item.thumbnail_width || console.warn("missing property thumbnail_width for image:", item)
        item.thumbnail_height || console.warn("missing property thumbnail_height for image:", item)

        item.scaled_width = Math.floor(fixed_height * (item.thumbnail_width / item.thumbnail_height));
    }

    function render_thumbs () {

        // we need some images
        if (!images) return [];

        // containing DOM element should have some width
        if (container_width == 0) return [];

        // calculate new thumbnail widths relative to row_height
        var items = images.slice();
        for (var t in items) {
            set_thumb_scale(items[t], row_height);
        }

        var thumbs = [];
        var rows = [];
        while(items.length > 0) {
            rows.push(build_image_row(items, container_width));
        }

        // gather images from all rows and put them into one single array 
        // (widths are already computed)
        for(var r in rows) {
            for(var i in rows[r]) {
                var item = rows[r][i];
                thumbs.push(item);
            }
        }

        return thumbs;
    }

    function onThumbnailClick(ix) {
        if (ix < images.length) {
            active_image_ix = ix;
        }
    }

    function on_close_lightbox() {
        active_image_ix = null
    }

    function on_change_lightbox_image(ix) {
        if (ix < images.length && ix >= 0) {
            active_image_ix = ix;
        }
    }


</script>

<div bind:this={gallery_element}>

    <h3>This is Gallery</h3>

    {#if active_image_ix != null}
        <Lightbox
            url={images[active_image_ix].src}
            on_close={on_close_lightbox}
            on_prev={() => on_change_lightbox_image(active_image_ix - 1)}
            on_next={() => on_change_lightbox_image(active_image_ix + 1)}
            show_prev={active_image_ix > 0}
            show_next={active_image_ix < images.length - 1}
            caption={images[active_image_ix].title}
        />
    {/if}

    {#each thumbnails as item, idx}

        <Thumbnail
            key={idx}
            height={row_height}
            item={item}
            margin={margin}
            onClick={() => onThumbnailClick(idx)}
            />

	{/each}

</div>

<style>

</style>
