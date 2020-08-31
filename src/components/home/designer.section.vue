<template>
  <section>
    <div class="projects-wrapper">
      <div class="projects">
        <ProjectCard
          v-for="(project, index) in projects"
          v-bind:key="index"
          :project="project"
        />
      </div>
    </div>
    <div class="arrows">
      <span v-on:click="slidePrev">Prev</span>
      <span v-on:click="slideNext">Next</span>
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
      pos: 0,
      posCounter: 0,
      projects: [
        {
          id: 1,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit. Porta sed leo rhoncus, cras lectus habitant sagittis sapien pulvinar. Id mauris volutpat sed cras lorem viverra.",
          img: "https://picsum.photos/seed/picsum/1000",
        },
        {
          id: 2,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit. Porta sed leo rhoncus, cras lectus habitant sagittis sapien pulvinar. Id mauris volutpat sed cras lorem viverra.",
          img: "https://picsum.photos/seed/picsum/1000",
        },
        {
          id: 3,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit. Porta sed leo rhoncus, cras lectus habitant sagittis sapien pulvinar. Id mauris volutpat sed cras lorem viverra.",
          img: "https://picsum.photos/seed/picsum/1000",
        },
        {
          id: 4,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit. Porta sed leo rhoncus, cras lectus habitant sagittis sapien pulvinar. Id mauris volutpat sed cras lorem viverra.",
          img: "https://picsum.photos/seed/picsum/1000",
        },
        {
          id: 5,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit. Porta sed leo rhoncus, cras lectus habitant sagittis sapien pulvinar. Id mauris volutpat sed cras lorem viverra.",
          img: "https://picsum.photos/seed/picsum/1000",
        },
      ],
    };
  },
  methods: {
    slidePrev() {
      let w = window.innerWidth;
      if (w <= 800 && this.posCounter > 0) {
        this.posCounter -= 1;
        this.pos += w;

      } else if (w >= 800 && this.posCounter > 0) {
        this.posCounter -= 1;
        this.pos += 350;
      }
      anime({
        targets: ".project",
        translateX: this.pos,
        duration: 700,
        easing: "spring(.5, 100, 80, 0)",
      });
    },
    slideNext() {
      let w = window.innerWidth;
      if (w <= 800 && this.posCounter < (this.projects.length - 2)) {
        this.posCounter += 1;
        this.pos -= w;

      } else if (w >= 800 && this.posCounter < (this.projects.length - 2)) {
        this.posCounter += 1;
        this.pos -= 350;
      }
      anime({
        targets: ".project",
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

// DESKTOP

section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: flex-end;
}

.projects-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50vw;
  overflow-x: scroll;
  border-left: 1px solid red;
  margin-bottom: 20px;
}

.projects {
  display: flex;
  width: 100%;
}

.arrows {
  align-self: flex-start;
  margin-left: 50%;
}
 ::-webkit-scrollbar {
    display: none;
  }

  // MOBILE
@media (max-width: 800px) {


  section {
    justify-content: flex-start;
    width: 100vw;
  }

  .projects-wrapper {
    width: 100vw;
  }

  .projects {
    transform: none;
  }

  // .arrows {
  //   display: none;
  // }
}
</style>
