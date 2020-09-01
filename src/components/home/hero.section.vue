<template>
  <div class="div">
    <div class="F">
      <h1>F</h1>
      <div class="olio">
        <h2>Ol</h2>
        <h2>iO</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero-Section",
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.div {
  height: 100vh;
}

.F {
  height: 100%;
  width: 300px;
  position: relative;
}

h1 {
  @include heading-large;
  color: $seccondary-sun_burn;
  font-size: 53em;
  position: absolute;
  left: -240px;
  top: 135px;
}
.olio {
  position: absolute;
  bottom: 10px;
  left: 180px;
  text-align: center;
  line-height: 1.2em;
  font-size: 5em;
  color: $seccondary-sun_burn;
}
</style>
