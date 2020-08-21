<template>
  <div>
      <ProjectCard/>
  </div>
</template>

<script>
import projectCard from "./project.component";

export default {
    name: "Designer-Section",
    components: {
        ProjectCard: projectCard
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

</style>