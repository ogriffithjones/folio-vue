<template>
  <section>
  <div class="right-content">
    <div class="projects">
        <ProjectCard
        v-for="(project, index) in projects"
        v-bind:key="index"
        :project="project"
        />
    </div> 
    <div class="arrows">
        <span>Prev</span>
        <span v-on:click="slideNext">Next</span>
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
        }
      ],
    };
  },
  methods: {
    slideNext: () => {
      console.log(10);
    }
  }
}

</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
}

.right-content {
  position: absolute;
  left: 50%;
}

.projects {
  display: flex;
}

.arrows {
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  width: 100px;

}

::-webkit-scrollbar {
    display: none;
}

</style>
