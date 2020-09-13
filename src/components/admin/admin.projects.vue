<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li class="project" v-for="(project, index) in projects" :key="index">
        {{project.title}}
        <div>
          <a href v-on:click.prevent="deleteProject(project._id)">Delete Article</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Admin-Projects",
  components: {},
  data: function() {
    return {
      projects: [],
    };
  },
  methods: {
    getProjects: function() {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}projects`)
        .then(function(data) {
          this.projects = data.body;
      });
    },
    deleteProject: function(projectId) {
      this.$http.delete(
        `${process.env.VUE_APP_API_URL}projects/${projectId}`).then(function() {
          this.getProjects();
        });
    },
  },
  created: function() {
    this.getProjects();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.projects {
  display: flex;
}
</style>
