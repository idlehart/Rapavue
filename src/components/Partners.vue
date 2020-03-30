<template>
  <section class="wrapper style1 align-center">
    <div class="inner">
      <h2>Partners</h2>
      <p>
        Här kan vi köra partners synliga och ha en mer beskrivande text än såhär.
      </p>
      <div class="items style1 medium onscroll-fade-in">
        <section v-for="partner in partners" :key="partner.id">
            <img class="logoImage" :src="partner.image">
            <h3>{{partner.name}}</h3>
            <p>{{partner.thankyou}}</p>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import partners from '../../public/assets/data/partners.json';
export default {
  name: "Partners",
  props: {},
  data: () => {
      return { partners };
  }
};
</script>

<style>
.logoImage {
    width: 65px;
    height: 65px;
}
</style>