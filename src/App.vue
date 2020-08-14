<template>
  <div id="app">
    <h1>Hello World</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import "./scss/_variables.scss";

body {
  background-color: $primary-bannana;
}

h1 {
  @include heading-large;
  color: $seccondary-sun_burn;
}
</style>
