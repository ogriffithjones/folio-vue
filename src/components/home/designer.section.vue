<template>
<section>
  <h1>Designer</h1>
    <div class="projects-wrapper">
      <div class="projects">
        <ProjectCard
      v-for="(project, index) in projects"
      v-bind:key="index"
      :project="project"
    />
      </div>
    </div>
</section>
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
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
        {
          id: 2,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
        {
          id: 3,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
        {
          id: 4,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
      ],
    };
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

section {
  //Position
  display: flex;
  align-items: center;
  justify-content: center;
  //Size
  height: 100vh;
  overflow: hidden;
  position: relative;
}

h1 {
  @include heading-large;
  position: absolute;
}

.projects-wrapper {
    //Size
    width: 90vh;
    height: 100vw;
    display: flex;

    transform: rotate(-90deg);
    overflow-y: scroll;
    flex-direction: column;
    border: 1px solid black;
}

.projects {
  margin: 1000px auto;
  align-items: center;
}

/* make scrollbar transparent */
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
</style>
