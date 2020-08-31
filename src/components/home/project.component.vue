<template>
  <div class="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.body }}</p>
    <img v-bind:src="project.img" alt />
  </div>
</template>

<script>
export default {
  name: "Project-Component",
  props: ["project"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// DESKTOP

.project {
  min-width: 340px;
}

h1 {
    @include heading-sub;
    color: $seccondary-sun_burn;
    font-size: 2em;
    padding: 0 0 20px 0;
    line-height: 1.2em;
  }

p {
    @include paragraph-small;
    font-size: 0.7em;
    color: $seccondary-sun_burn;
    padding: 0 0 20px 0;
    line-height: 1.5em;
  }

img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  // MOBILE
@media (max-width: 800px) {
  .project {
    min-width: 100vw;
    padding:  10px;
  }
}
</style>
