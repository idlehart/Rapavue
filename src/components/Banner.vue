<template>
  <section
    class="banner style1 orient-left content-align-left image-position-center fullscreen onload-image-fade-in onload-content-fade-right"
  >
    <div class="content">
        <div class="imageFrame">
        <img id="bannerimg" src="assets/rapawayBlack.png" alt="">
        </div >
      <!-- <h1>Rapaway</h1> -->
      <p class="major" v-if="loaded">{{bannerData.text}}</p>
      <ul class="actions stacked">
        <li>
          <a href="#first" class="button big wide smooth-scroll-middle">Berätta mer!</a>
        </li>
      </ul>
    </div>
    <div class="image">
      <img src="../assets/images/pic2.jpg" alt />
    </div>
  </section>
</template>

<script>

export default {
  name: "Banner",
  props: {},
  data: () => {
    return {
      bannerData: null,
      loaded: false
    };
  },
  created () {
    this.fetchBannerData()
  },
  computed: {
    loadedEvents() {
      console.log('loadedBannerData', this.bannerData)
      return this.bannerData
    }
  },
  methods: {
    fetchBannerData() {
      fetch('assets/data/banner.json', { cache: 'reload'})
        .then( resp => resp.json() )
        .then ( json => {
          console.log('json parsed', json)
          this.bannerData = json
          this.loaded = true
        })
    },
  }
};
</script>

<style>
.imageFrame {
    display:inline-block;
    vertical-align: middle;
    width: 100%;
    padding-bottom: 20px;
}
#bannerimg {
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 200px;
}

.banner.style1 {
  -moz-align-items: -moz-stretch;
  -webkit-align-items: -webkit-stretch;
  -ms-align-items: -ms-stretch;
  align-items: stretch;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: row;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -moz-justify-content: -moz-flex-end;
  -webkit-justify-content: -webkit-flex-end;
  -ms-justify-content: -ms-flex-end;
  justify-content: flex-end;
  position: relative;
  text-align: center;
  overflow-x: hidden;
}

.banner.onload-content-fade-up .content {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

body.is-preload .banner.onload-content-fade-up .content {
  -moz-transform: translateY(1rem);
  -webkit-transform: translateY(1rem);
  -ms-transform: translateY(1rem);
  transform: translateY(1rem);
  opacity: 0;
}

.banner.onload-content-fade-down .content {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

body.is-preload .banner.onload-content-fade-down .content {
  -moz-transform: translateY(-1rem);
  -webkit-transform: translateY(-1rem);
  -ms-transform: translateY(-1rem);
  transform: translateY(-1rem);
  opacity: 0;
}

.banner.onload-content-fade-left .content {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

body.is-preload .banner.onload-content-fade-left .content {
  -moz-transform: translateX(1rem);
  -webkit-transform: translateX(1rem);
  -ms-transform: translateX(1rem);
  transform: translateX(1rem);
  opacity: 0;
}

.banner.onload-content-fade-right .content {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

body.is-preload .banner.onload-content-fade-right .content {
  -moz-transform: translateX(-1rem);
  -webkit-transform: translateX(-1rem);
  -ms-transform: translateX(-1rem);
  transform: translateX(-1rem);
  opacity: 0;
}

.banner.onload-content-fade-in .content {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
}

body.is-preload .banner.onload-content-fade-in .content {
  opacity: 0;
}

.banner.onload-image-fade-up .image {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onload-image-fade-up .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
  -moz-transition-delay: 0.5625s;
  -webkit-transition-delay: 0.5625s;
  -ms-transition-delay: 0.5625s;
  transition-delay: 0.5625s;
}

body.is-preload .banner.onload-image-fade-up .image {
  -moz-transform: translateY(1rem);
  -webkit-transform: translateY(1rem);
  -ms-transform: translateY(1rem);
  transform: translateY(1rem);
  opacity: 0;
}

body.is-preload .banner.onload-image-fade-up .image img {
  opacity: 0;
}

.banner.onload-image-fade-down .image {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onload-image-fade-down .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
  -moz-transition-delay: 0.5625s;
  -webkit-transition-delay: 0.5625s;
  -ms-transition-delay: 0.5625s;
  transition-delay: 0.5625s;
}

body.is-preload .banner.onload-image-fade-down .image {
  -moz-transform: translateY(-1rem);
  -webkit-transform: translateY(-1rem);
  -ms-transform: translateY(-1rem);
  transform: translateY(-1rem);
  opacity: 0;
}

body.is-preload .banner.onload-image-fade-down .image img {
  opacity: 0;
}

.banner.onload-image-fade-left .image {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onload-image-fade-left .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
  -moz-transition-delay: 0.5625s;
  -webkit-transition-delay: 0.5625s;
  -ms-transition-delay: 0.5625s;
  transition-delay: 0.5625s;
}

body.is-preload .banner.onload-image-fade-left .image {
  -moz-transform: translateX(1rem);
  -webkit-transform: translateX(1rem);
  -ms-transform: translateX(1rem);
  transform: translateX(1rem);
  opacity: 0;
}

body.is-preload .banner.onload-image-fade-left .image img {
  opacity: 0;
}

.banner.onload-image-fade-right .image {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onload-image-fade-right .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
  -moz-transition-delay: 0.5625s;
  -webkit-transition-delay: 0.5625s;
  -ms-transition-delay: 0.5625s;
  transition-delay: 0.5625s;
}

body.is-preload .banner.onload-image-fade-right .image {
  -moz-transform: translateX(-1rem);
  -webkit-transform: translateX(-1rem);
  -ms-transform: translateX(-1rem);
  transform: translateX(-1rem);
  opacity: 0;
}

body.is-preload .banner.onload-image-fade-right .image img {
  opacity: 0;
}

.banner.onload-image-fade-in .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
}

body.is-preload .banner.onload-image-fade-in .image img {
  opacity: 0;
}

.banner.onscroll-content-fade-up .content {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onscroll-content-fade-up.is-inactive .content {
  -moz-transform: translateY(1rem);
  -webkit-transform: translateY(1rem);
  -ms-transform: translateY(1rem);
  transform: translateY(1rem);
  opacity: 0;
}

.banner.onscroll-content-fade-down .content {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onscroll-content-fade-down.is-inactive .content {
  -moz-transform: translateY(-1rem);
  -webkit-transform: translateY(-1rem);
  -ms-transform: translateY(-1rem);
  transform: translateY(-1rem);
  opacity: 0;
}

.banner.onscroll-content-fade-left .content {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onscroll-content-fade-left.is-inactive .content {
  -moz-transform: translateX(1rem);
  -webkit-transform: translateX(1rem);
  -ms-transform: translateX(1rem);
  transform: translateX(1rem);
  opacity: 0;
}

.banner.onscroll-content-fade-right .content {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onscroll-content-fade-right.is-inactive .content {
  -moz-transform: translateX(-1rem);
  -webkit-transform: translateX(-1rem);
  -ms-transform: translateX(-1rem);
  transform: translateX(-1rem);
  opacity: 0;
}

.banner.onscroll-content-fade-in .content {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
}

.banner.onscroll-content-fade-in.is-inactive .content {
  opacity: 0;
}

.banner.onscroll-image-fade-up .image {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onscroll-image-fade-up .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
  -moz-transition-delay: 0.5625s;
  -webkit-transition-delay: 0.5625s;
  -ms-transition-delay: 0.5625s;
  transition-delay: 0.5625s;
}

.banner.onscroll-image-fade-up.is-inactive .image {
  -moz-transform: translateY(1rem);
  -webkit-transform: translateY(1rem);
  -ms-transform: translateY(1rem);
  transform: translateY(1rem);
  opacity: 0;
}

.banner.onscroll-image-fade-up.is-inactive .image img {
  opacity: 0;
}

.banner.onscroll-image-fade-down .image {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onscroll-image-fade-down .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
  -moz-transition-delay: 0.5625s;
  -webkit-transition-delay: 0.5625s;
  -ms-transition-delay: 0.5625s;
  transition-delay: 0.5625s;
}

.banner.onscroll-image-fade-down.is-inactive .image {
  -moz-transform: translateY(-1rem);
  -webkit-transform: translateY(-1rem);
  -ms-transform: translateY(-1rem);
  transform: translateY(-1rem);
  opacity: 0;
}

.banner.onscroll-image-fade-down.is-inactive .image img {
  opacity: 0;
}

.banner.onscroll-image-fade-left .image {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onscroll-image-fade-left .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
  -moz-transition-delay: 0.5625s;
  -webkit-transition-delay: 0.5625s;
  -ms-transition-delay: 0.5625s;
  transition-delay: 0.5625s;
}

.banner.onscroll-image-fade-left.is-inactive .image {
  -moz-transform: translateX(1rem);
  -webkit-transform: translateX(1rem);
  -ms-transform: translateX(1rem);
  transform: translateX(1rem);
  opacity: 0;
}

.banner.onscroll-image-fade-left.is-inactive .image img {
  opacity: 0;
}

.banner.onscroll-image-fade-right .image {
  -moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out,
    -webkit-transform 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.banner.onscroll-image-fade-right .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
  -moz-transition-delay: 0.5625s;
  -webkit-transition-delay: 0.5625s;
  -ms-transition-delay: 0.5625s;
  transition-delay: 0.5625s;
}

.banner.onscroll-image-fade-right.is-inactive .image {
  -moz-transform: translateX(-1rem);
  -webkit-transform: translateX(-1rem);
  -ms-transform: translateX(-1rem);
  transform: translateX(-1rem);
  opacity: 0;
}

.banner.onscroll-image-fade-right.is-inactive .image img {
  opacity: 0;
}

.banner.onscroll-image-fade-in .image img {
  -moz-transition: opacity 0.75s ease-in-out;
  -webkit-transition: opacity 0.75s ease-in-out;
  -ms-transition: opacity 0.75s ease-in-out;
  transition: opacity 0.75s ease-in-out;
}

.banner.onscroll-image-fade-in.is-inactive .image img {
  opacity: 0;
}
</style>