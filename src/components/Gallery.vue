<template>
  <section class="wrapper style1 align-center">
    <!-- Gallery -->
    <div class="gallery style2 medium lightbox onscroll-fade-in" id="eventGallery">
      <article v-for="event in events" :key="event.id">
        {{event}}
        <a href="images/gallery/fulls/01.jpg" class="image">
          <img src="images/gallery/thumbs/01.jpg" alt />
        </a>
        <div class="caption">
          <h3>Ipsum Dolor</h3>
          <p>ASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASD</p>
          <ul class="actions fixed">
            <li>
              <span class="button small">Details</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import events from '../data/events.json';
export default {
    data: () => {
        return {
            events,
        }
    },
  name: "Gallery",
  props: {},
};
</script>

<style>
</style>