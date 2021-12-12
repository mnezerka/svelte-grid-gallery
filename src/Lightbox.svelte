<script>
    export let url
    export let caption = ""
    export let on_close = () => {}
    export let on_prev = () => {}
    export let on_next = () => {}
    export let show_prev = true;
    export let show_next = true;
    export let pos = "";

    function on_window_key_down(event) {
      if (event.key === 'Escape') {
        on_close()
      } else if (event.key === 'ArrowRight') {
        on_next()
      } else if (event.key === 'ArrowLeft') {
        on_prev()
      }
    }

</script>

<svelte:window on:keydown={on_window_key_down} />

<!-- The Modal/Lightbox -->
<div class="modal">

    <span class="close cursor" on:click={on_close}>&times;</span>

    <!-- Next/previous controls -->
    {#if show_prev}
    <div class="prev" on:click={on_prev}>&#10094;</div>
    {/if}

    {#if show_next}
    <div class="next" on:click={on_next}>&#10095;</div>
    {/if}

    <div class="modal-inner">
        <div class="modal-content" on:click={on_next}>

            <img src={url} alt="todo" title="todo" />

            <!-- Caption text -->
            <div class="caption-container">
                <div class="caption">{caption}</div>
                {#if pos.length > 0}<div class="pos">{pos}</div>{/if}
            </div>
        </div>
    </div>
</div>

<style>
/* The Modal (background) */
.modal {
  /*display: none;*/
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  /* padding-top: 100px; */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /*background-color: #1a1a1a;*/
  background-color:rgba(0, 0, 0, 0.9);
}

.modal-inner {
    /*text-align: center;*/
    margin: auto;
}

/* Modal Content */
.modal-content {
  /* background-color: #fefefe;*/
  cursor: pointer;
}

.modal-content img {
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 90px);
}

/* The Close Button */
.close {
  color: #555;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 40px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #aaa;
  text-decoration: none;
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: #555;
  font-weight: bold;
  font-size: 40px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev {
  left: 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  color: #aaa;
}

/* Caption text */
.caption-container {
  /*text-align: center;*/
  /*background-color: black;*/
  /*padding: 2px 16px;*/
  display: flex;
  flex-direction: row;
  color: #aaa;
  font-style: italic;
  font-size: 13px;
}

.caption-container .caption {
    flex-grow: 1;
}

</style>