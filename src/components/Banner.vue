<template>
  <section
    class="banner style1 orient-left content-align-left image-position-center fullscreen onload-image-fade-in onload-content-fade-right"
  >
    <div class="content">
      <h1>Rapaway</h1>
      <p class="major">Välkommen till Rapaway. Här sätter vi en välkommnande exempeltext.</p>
      <ul class="actions stacked">
        <li>
          <a href="#first" class="button big wide smooth-scroll-middle">Get Started</a>
        </li>
      </ul>
    </div>
    <div class="image" id="flerp">
      <img src="../assets/images/pic2.jpg" alt />
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: {}
};
</script>

<style>
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