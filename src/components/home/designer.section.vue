<template>
  <section>
    <h1>Oliver Griffith-Jones</h1>
    <div class="right-content">
      <div class="projects">
        <ProjectCard
          v-for="(project, index) in projects"
          v-bind:key="index"
          :project="project"
        />
      </div>
      <div class="arrows">
        <span v-on:click="slidePrev">Prev</span>
        <span v-on:click="slideNext">Next</span>
      </div>
    </div>
  </section>
</template>

<script>
//AnimeJS
import anime from "animejs/lib/anime.es.js";
import projectCard from "./project.component";

export default {
  name: "Designer-Section",
  components: {
    ProjectCard: projectCard,
  },
  data() {
    return {
      pos: 2,
      posCounter: 0,
      projects: [
        {
          id: 1,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000",
        },
        {
          id: 2,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000",
        },
        {
          id: 3,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000",
        },
        {
          id: 4,
          title: "Project title",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          img: "https://picsum.photos/seed/picsum/1000",
        },
      ],
    };
  },
  methods: {
    slidePrev() {
      if (this.posCounter > 0) {
        this.posCounter -= 1;
        this.pos += 390;
      }
      anime({
        targets: ".projects",
        translateX: this.pos,
        duration: 700,
        easing: "spring(.5, 100, 80, 0)",
      });
    },
    slideNext() {
      if (this.posCounter < this.projects.length - 1) {
        this.posCounter += 1;
        this.pos -= 390;
      }
      anime({
        targets: ".projects",
        translateX: this.pos,
        duration: 700,
        easing: "spring(.5, 100, 80, 0)",
      });
    },
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

// MOBILE

h1 {
  border-bottom: 1px solid $seccondary-sun_burn;
}

.arrows {
  display: none;
}

::-webkit-scrollbar {
  display: none;
}

// DESKTOP

@media (min-width: 800px) {

  section  {
    height: 100%;
  }

  h1 {
    border: none;
  }

  .projects {
    display: flex;
    margin: auto;
    align-self: center;
    margin-left: 50%;
  }


  .arrows {
    display: block;
  }
}
</style>
