<template>
  <div>
    <section>
      <ProjectCard class="project"
      v-for="(project, index) in projects"
      v-bind:key="index"
      :project="project"
    />
    </section>
  </div>
</template>

<script>
import projectCard from "../home/project.component";

export default {
  name: "Admin-Projects",
  components: {
    ProjectCard: projectCard,
  },
  data: function() {
    return {
      projects: [
        {
          id: 1,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit.",
        },
        {
          id: 3,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit.",
        },
        {
          id: 3,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit.",
        },
        {
          id: 4,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit.",
        },
        {
          id: 5,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit.",
        },
        {
          id: 6,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

section {
  width: 90vw;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.project {
  max-width: 350px;
  flex-grow: 1;
  margin: 0 15px 30px 15px;
}

</style>
