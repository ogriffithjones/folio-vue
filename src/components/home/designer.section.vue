<template>
  <section>
    <h1>Oliver Griffith-Jones</h1>
    <div class="right-content">
      <div class="projects-wrapper">
        <div class="projects">
          <ProjectCard v-for="(project, index) in projects" v-bind:key="index" :project="project" />
        </div>
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
    ProjectCard: projectCard
  },
  data() {
    return {
      pos: 2,
      posCounter: 0,
      projects: [
        {
          id: 1,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit. Porta sed leo rhoncus, cras lectus habitant sagittis sapien pulvinar. Id mauris volutpat sed cras lorem viverra. Ornare justo malesuada congue viverra tellus nunc cras neque odio. Aliquam aliquam nunc nibh eget. Enim elementum, eget nulla interdum ullamcorper blandit augue eget.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
        {
          id: 2,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit. Porta sed leo rhoncus, cras lectus habitant sagittis sapien pulvinar. Id mauris volutpat sed cras lorem viverra. Ornare justo malesuada congue viverra tellus nunc cras neque odio. Aliquam aliquam nunc nibh eget. Enim elementum, eget nulla interdum ullamcorper blandit augue eget.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
        {
          id: 3,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit. Porta sed leo rhoncus, cras lectus habitant sagittis sapien pulvinar. Id mauris volutpat sed cras lorem viverra. Ornare justo malesuada congue viverra tellus nunc cras neque odio. Aliquam aliquam nunc nibh eget. Enim elementum, eget nulla interdum ullamcorper blandit augue eget.",
          img: "https://picsum.photos/seed/picsum/1000"
        },
        {
          id: 4,
          title: "Black Estate Site Redesign concept",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus magna nisl quis sem sed turpis. Massa eget nulla bibendum amet placerat ultrices pretium, libero. Varius gravida pellentesque netus magna. Tellus orci vulputate vel diam sit lacus facilisi. Pretium massa lorem sit adipiscing magna id sem. Montes, tincidunt molestie eleifend et venenatis. Pellentesque neque, tempor nulla ac a. Morbi facilisis dictumst tristique magna scelerisque vivamus dictum hendrerit. Porta sed leo rhoncus, cras lectus habitant sagittis sapien pulvinar. Id mauris volutpat sed cras lorem viverra. Ornare justo malesuada congue viverra tellus nunc cras neque odio. Aliquam aliquam nunc nibh eget. Enim elementum, eget nulla interdum ullamcorper blandit augue eget.",
          img: "https://picsum.photos/seed/picsum/1000"
        }
      ]
    };
  },
  methods: {
    slidePrev() {
      if (this.posCounter > 0) {
        this.posCounter -= 1;
        this.pos += 590;
      }
      anime({
        targets: ".projects",
        translateX: this.pos,
        duration: 700,
        easing: "spring(.5, 100, 80, 0)"
      });
    },
    slideNext() {
      if (this.posCounter < this.projects.length - 1) {
        this.posCounter += 1;
        this.pos -= 590;
      }
      anime({
        targets: ".projects",
        translateX: this.pos,
        duration: 700,
        easing: "spring(.5, 100, 80, 0)"
      });
    }
  }
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

.projects {
  transform: unset;
}

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

@media (max-width: 1100px) {

}

@media (min-width: 800px) {
  section {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  h1 {
    border: none;
    width: 50vw;
    margin: 0 1em;
    @include heading-large;
    color: $seccondary-sun_burn;
  }

  .right-content {
    width: 50vw;
    height: 100%;
    
  }

  .projects-wrapper {
    display: flex;
    align-items: center;
    overflow-x: hidden;
    border-left: 1px solid $seccondary-sun_burn;
    margin-bottom: 20px;
    height: 90%;
  }

  .projects {
    display: flex;
    width: 100%;
  }

  .arrows {
    display: block;
    margin-left: 20px;
  }
}
</style>
