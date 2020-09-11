<template>
  <section>
    <h1 class="what">What’s</h1>
    <h1 class="this">This?</h1>
  </section>
</template>

<script>
export default {
  name: "About-Hero",
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
section {
  height: 100vh;
  display: contents;
  color: $seccondary-sun_burn;
  @include heading-large;
  position: fixed;
  top: 0rem;
  right: 0rem;
  font-size: 65px;
  line-height: 18px;
  text-align: end;
  font-family: $font-main;
}

h1 {
  font-weight: 900;
  font-size: 100px;
  line-height: 26px;
}


@media only screen and (min-width: 992px) {
  section {
    font-size: 15rem;
    padding-left: 13rem;
  }

  h1 {
    font-size: 250px;
    line-height: 45px;
    letter-spacing: 0.03em;
  }
  .what {
    padding-left: 70rem;
  }

  .this {
    padding-left: 82rem;
  }
}
</style>
