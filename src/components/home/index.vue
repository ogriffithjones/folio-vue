<template>
  <!-- <HeroSection></HeroSection> -->
  <div>
    <DesignerSection v-for="(author,index) in authors" v-bind:key="index" :author="author" />
  </div>
</template>

<script>
import designerSection from "./designer.section";
// import heroSection from "./hero.section";

export default {
  name: "Designer-Section",
  // name: "Hero-Section",
  components: {
    DesignerSection: designerSection
    // HeroSection: heroSection,
  },
  data: function() {
    return {
      authors: []
    };
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
</style>
