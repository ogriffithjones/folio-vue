
<template>
  <div>
      <Hero/>

      <Content/>
  </div>
</template>

<script>
import Content from './content.section'
import Hero from './hero.section'
export default {
    name:'Home',
    components: {
        'Content': Content,
        'Hero': Hero
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
</style>