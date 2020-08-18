<template>
<div>
    <h1>I'm A Designer</h1>
  <div class="designers">
      <Designer v-for="(designer, index) in designers" :key="index" :designer="designer"/>
  </div>
</div>
</template>

<script>
import Designer from './designer.component'

export default {
  name: 'Designer Component',
  components: {
    'Designer': Designer
  },
  data: function() {
    return {
      designers: [{
          name: "Oliver Griffith-Jones",
          url: "twitter.com/olzgj",
          about: "I am a person"
          
      },{
          name: "Oliver Griffith-Jones",
          url: "twitter.com/olzgj",
          about: "I am a person"
          
      }]
    };
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

h1 {
    color: green;
}
</style>