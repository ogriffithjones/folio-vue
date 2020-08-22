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

.project {
  //Size
  width: 350px;
  //Spacing
  margin: 15px;
  padding-right: 30px;
  border-right: solid 1px $seccondary-sun_burn;
}

h1 {
  //Font
  @include heading-sub;
  //Spacing
  padding-bottom: 20px;
}

p {
  //Color
  color: $seccondary-sun_burn;
  //Font
  @include paragraph-small;
  //Spacing
  padding-bottom: 20px;
  
}

img {
  //Size
  width: 100%;
  height: 200px;
  object-fit: cover;
}

</style>