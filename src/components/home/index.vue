<template>
  <DesignerSection></DesignerSection>
</template>

<script>
import designerSection from './designer.section';

export default {
  name: "Designer-Section",
  components: {
    DesignerSection: designerSection,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>