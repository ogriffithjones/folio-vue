<template>
  <div>
    <ProjectCard
      v-for="(project, index) in projects"
      v-bind:key="index"
      :project="project"
    />
    <ProjectCard
      v-for="(project, index) in projects"
      v-bind:key="index"
      :project="project"
    />
    <ProjectCard
      v-for="(project, index) in projects"
      v-bind:key="index"
      :project="project"
    />
    <ProjectCard
      v-for="(project, index) in projects"
      v-bind:key="index"
      :project="project"
    />
  </div>
</template>

<script>
import projectCard from "./project.component";

export default {
  name: "Designer-Section",
  components: {
    ProjectCard: projectCard,
  },
  data: function() {
    return {
      projects: [
        {
          id: 1,
          title: "Title",
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit obcaecati id officia, explicabo error dolore iure, eaque rem laborum, vero magni optio. Nesciunt obcaecati suscipit saepe quia, adipisci qui repudiandae!",
          img: "https://picsum.photos/seed/picsum/100",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
</style>
