<template>
  <div class="project">
      <h1>{{project.title}}</h1>
      <p>{{project.body}}</p>
      <img v-bind:src="project.img" alt="">
  </div>
</template>

<script>
export default {
    name: 'Project-Component',
    props: ['project']
}
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
  margin: 0 20px;
}

h1 {
  @include heading-sub;
  color: $seccondary-sun_burn;
  padding: 0 0 10px 0;
}

p {
  @include paragraph-small;
  color: $seccondary-sun_burn;
  padding: 0 0 10px 0;
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

// DESKTOP

@media (min-width: 800px) {

  .project {
    min-width: 350px;
  }
}
</style>