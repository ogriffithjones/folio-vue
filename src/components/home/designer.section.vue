<template>
  <section>
    <div class="left-col">
      <h1>{{ author.name }}</h1>
    </div>
    <div class="right-col">
      <div class="projects">
        <ProjectComponent
          v-for="(project, index) in projects"
          v-bind:key="index"
          :project="project"
        />
      </div>
      <div class="arrows">
        <img
          class="arrows__prev"
          v-on:click="slidePrev"
          v-bind:src="arrows"
          alt
        />
        <img v-on:click="slideNext" v-bind:src="arrows" alt />
      </div>
    </div>
  </section>
</template>

<script>
//AnimeJS
import anime from "animejs/lib/anime.es.js";
import projectComponent from "./project.component";

export default {
  name: "Designer-Section",
  components: {
    ProjectComponent: projectComponent,
  },
  props: ["author"],
  data() {
    return {
      pos: 0,
      posCounter: 0,
      arrows: require("../../assets/arrow_icon.png"),
      projects: [],
    };
  },
  methods: {
    slidePrev() {
      if (this.posCounter > 0) {
        this.posCounter -= 1;
        this.pos += 375;
        anime({
          targets: ".project",
          translateX: this.pos,
          duration: 700,
          easing: "spring(.5, 100, 80, 0)",
        });
      }
    },
    slideNext() {
      if (this.posCounter < this.projects.length - 1) {
        this.posCounter += 1;
        this.pos -= 375;
        anime({
          targets: ".project",
          translateX: this.pos,
          duration: 700,
          easing: "spring(.5, 100, 80, 0)",
        });
      }
    },
    getProjects: function() {
      this.$http
        .get(
          `${process.env.VUE_APP_API_URL}authors/${this.author._id}/projects`
        )
        //you are only navigating to /authors on the backend.
        .then(function(data) {
          this.projects = data.body;
          
          
        });
    },
  },
  created: function() {
    this.getProjects();
    console.log(this.projects);
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

// MOBILE SCREEN

section {
  flex-direction: column;
}

h1 {
  @include heading-sub;
  //Font
  font-size: 6em;
  font-weight: 800;
  line-height: 1.2em;
  color: $seccondary-sun_burn;
  //Spacing
  margin-bottom: 20px;
  padding: 1em 0;
  border-bottom: 1px solid $seccondary-sun_burn;
}

.right-col {
  //Set projects column to width of viewport on mobile
  width: 100vw;
}

.projects {
  flex-direction: column;
  //Size
  width: 100%;
}

.arrows {
  //Hide arrow buttons on mobile
  display: none;
}

// DESKTOP SCREEN
@media (min-width: 900px) {
  section {
    //Layout
    display: flex;
    flex-direction: row;
    align-items: center;
    //Size
    height: 100vh;
    width: 100vw;
    //Freeze vertical scrolling
    overflow-y: hidden;
  }

  .right-col {
    //Layout
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    //Size
    height: 90vh;
    flex: 2 1 50%;
    min-width: 50%;
  }

  .left-col {
    display: flex;
    justify-content: center;
  }

  h1 {
    //Font
    @include heading-large;
    color: $seccondary-sun_burn;
    font-size: 7em;
    line-height: 1.3em;
    //Size and Spacing
    border: none;
    margin-bottom: 0;
    margin: 0 0.5em;
  }

  .projects {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    border-left: 1px solid red;
    margin-bottom: 20px;
    width: 100%;
    padding-left: 20px;
    height: 100vh;
  }

  // Manual scroll
  .arrows {
    display: flex;
    justify-content: space-between;
    width: 80px;
    align-self: flex-start;
    & img {
      height: 30px;
    }
    &__prev {
      transform: rotate(180deg);
    }
  }
  //Hide scrollbar for projects
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
