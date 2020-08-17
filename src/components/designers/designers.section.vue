<template>
<div>
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
          
      }]
    };
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";


</style>