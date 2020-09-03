<template>
  <!-- <HeroSection></HeroSection> -->
  <div>
    <DesignerSection v-for="(author,index) in authors" v-bind:key="index" :author="author" />
  </div>
</template>

<script>
import designerSection from "./designer.section";
// import heroSection from "./hero.section";

// PanelSnap
// import PanelSnap from 'panelsnap';

// const instance = new PanelSnap(defaultOptions);

// var defaultOptions = {
//     container: document.querySelector('section'),
//     panelSelector: '.d-section',
//     directionThreshold: 50,
//     delay: 0,
//     duration: 300,
//     easing: function(t) { return t },
//   };



export default {
  name: "Designer-Section",
  // name: "Hero-Section",
  components: {
    DesignerSection: designerSection
    // HeroSection: heroSection,
  },
  data: function() {
    return {
<<<<<<< HEAD
      authors: [
        "Oliver Grithith -Jones",
        "Himanshu Rajpal",
        "Jesse Saunders",
        "Chris Coulbeck"
      ]
=======
      authors: []
>>>>>>> admin
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
