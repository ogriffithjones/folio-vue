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

// MOBILE

.project {
  width: 100%;
  padding: 20px 20px 0 20px;
}

h1 {
  @include heading-sub;
  color: $seccondary-sun_burn;
  font-size: 2.8em;
  padding: 0 0 20px 0;
  line-height: 1em;
  font-weight: 800;
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
  padding-bottom: 1em;
}

//Desktop 
@media (min-width: 900px) {
  .project {
    min-width: 350px;
  }
  h1 {
    line-height: 1.1em;
  }
  img {
    padding-bottom: 0;
    height: 200px;
  }
}
</style>
