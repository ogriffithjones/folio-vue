<template>
  <div>
    <h1>{{ project.title }}</h1>
    <p>{{ project.body }}</p>
    <img v-bind:src="thumbnail" alt />
  </div>
</template>

<script>
export default {
  name: "Project-Component",
  props: ["project"],
  data: function() {
    return {
      thumbnail: require("../../assets/thumbnail.jpg")
    };
  }
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
  h1 {
    line-height: 1.1em;
  }
  img {
    padding-bottom: 0;
    height: 200px;
  }
}
</style>
