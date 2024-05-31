<template>
  <section>
    <h3>About Us</h3>

    <p>
      We are a small group of UX designers and web developers. This group
      portfolio was designed and built as part of a Yoobee project. We are a
      small group of UX designers and web developers. This group portfolio was
      designed and built as part of a Yoobee project. We are a small group of UX
      designers and web developers. This group portfolio was designed and built
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
section {
  height: 100vh;
  margin-left: 1rem;
  width: 85%;

}
h3 {
  color: $seccondary-sun_burn;
  font-family: $font-main;
  font-size: 30px;
}
p {
  @include paragraph-main;
  color: $accent-mellow;
  line-height: 1.8rem;
  font-size: 20px;
  font-family: $font-seccondary;
  font-weight: lighter; 
}
@media only screen and (min-width: 992px) {
  section {
    padding-left: 25rem;
    width: 60rem;
  }
  h3 {
    font-size: 30px;
  }
  p {
    line-height: 2.2rem;
    font-size: 25px;
  }
}
</style>