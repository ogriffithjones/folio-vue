<template>
<div>
    <Designers/>
</div>
</template>

<script>
import Designers from './designers.section'

export default {
  name: 'Designers Page',
  components: {
    'Designers': Designers
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";


</style>