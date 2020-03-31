<template>
  <section
    class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
    id="first"
  >
    <div class="content">
      <h2>Mer djupgående information här!</h2>
      <p>
        Här tänkte jag man kan placera lite mer text angående vad som händer på Rapaway.
      </p>
      <!-- <ul class="actions stacked">
        <li>
          <a href="#" class="button">Learn More</a>
        </li>
      </ul> -->
    </div>
    <div class="image">
      <img src="../assets/images/pic1.jpg" alt />
      <!-- <video src="clips/rapchoirshort.mp4" width="100%" autoPlay muted /> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "Spotlight",
  props: {},
  data: () => {
    return {
      spotlightData: null,
      loaded: false
    };
  },
  created () {
    this.fetchSpotlightData()
  },
  computed: {
    loadedEvents() {
      console.log('loadedSpotlightData', this.spotlightData)
      return this.spotlightData
    }
  },
  methods: {
    fetchSpotlightData() {
      fetch( 'assets/data/spotlight.json', { cache: 'no-cache' } )
        .then( resp => resp.json() )
        .then ( json => {
          console.log('json parsed', json)
          this.spotlightData = json
          this.loaded = true
        })
    },
  }
};
</script>

<style>
</style>