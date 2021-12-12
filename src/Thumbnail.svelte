
<script>
    export let item;
    export let key;
    export let height;
    export let margin = 0;
    export let onClick = function() {}

    item !== undefined || console.warn("No item passed to the Image component")
    key !== undefined || console.warn("No key passed to the Image component")
    height !== undefined || console.warn("No height passed to the Image component")

    //console.log(thumbnail_props)

    $: viewport_style = `
        height: ${height}px;
        width: ${item.grid_width}px;
    `;

    $: img_style = `
        height: ${height}px;
        width: ${item.scaled_width}px;
        margin-left: ${item.margin_left}px;
    `;

</script>

<div class="tile" style="margin: {margin}px;" on:click={onClick}>
    <div class="tile-viewport" style={viewport_style}>
        <img key="img-{key}" src={item.thumbnail} alt="todo" title="todo" style={img_style} />
    </div>
</div>

<style>
    :global(.tile) {
        user-select: none;
        position: relative;
        float: left;
        background: #f00;
        padding: 0px;
    }

    :global(.tile-viewport) {
        overflow: hidden;
    }

    :global(.tile img) {
        margin-top: 0;
        cursor: pointer;
    }
</style>