<template>
  <div class="project">
      <h1>{{project.title}}</h1>
      <p>{{project.body}}</p>
      <img v-bind:src="'https://picsum.photos/1000'"  alt="">
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

.project {
    display: flex;
    flex-direction: column;
    border: 1px solid $accent-stone;
    // Size
    max-width: 400px;
    // Position
}

h1 {
    @include heading-title;
    //Colors
    color: $seccondary-sun_burn;
}

p {
    @include paragraph-main;
    //Colors
    color: $seccondary-sun_burn;
}
img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}

</style>