<template>
<section>
    <h1>Designer</h1>
    <!-- Projects -->
    <div class="mask"></div>
    <div class="projects">
      <ProjectCard
      v-for="(project, index) in projects"
      v-bind:key="index"
      :project="project"
    />
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
        {
          id: 5,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
        {
          id: 6,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
        {
          id: 7,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
        {
          id: 8,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000"
        }
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
  //Size
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.mask {
  background: rgb(246,238,224);
  background: linear-gradient(90deg, rgba(246,238,224,1) 50%, rgba(246,238,224,0) 100%);
  height: 500px;
  width: 700px;
  position: absolute;
  z-index: 1000;
  left: 70px;
}

h1 {
  //Spacing
  margin: 0 50px;
  //Size
  @include heading-large;
  //Color
  color: $seccondary-sun_burn;
  position: absolute;
  top: 50%;
  z-index: 1001;
  
}
.projects {
    //Size
    width: 100vw;
    height: 90vw;
    display: flex;
    align-items: center;
    transform: rotate(-90deg);
    overflow-y: scroll;
    flex-direction: column;

}

/* make scrollbar transparent */
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
</style>
