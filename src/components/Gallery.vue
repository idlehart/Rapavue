<template>
  <section class="wrapper style1 align-center">
    <div  class="gallery style2 medium lightbox onscroll-fade-in">
      <article v-for="event in events" :key="event.id">
        <a class="image">
          <img :src="event.image" alt />
        </a>
        <div class="caption">
          <h3>{{event.where}}</h3>
          <p>{{event.info}}</p>
          <!-- <ul class="actions fixed">
            <li>
              <span class="button small">Details</span>
            </li>
          </ul> -->
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import events from "../data/events.json";
export default {
  data: () => {
    return {
      events
    };
  },
  name: "Gallery",
  props: {}
};
</script>

<style>
</style>