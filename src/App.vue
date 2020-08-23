<template>
  <div id="app">
    <router-view/>
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
  margin: unset;
  padding: unset;
}
</style>
