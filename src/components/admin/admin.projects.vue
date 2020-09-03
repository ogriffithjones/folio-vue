<template>
  <div>
    <ul>
      <li v-for="(project,index) in projects" v-bind:key="index">
        <router-link
          v-bind:to="{ name: 'details', params: { projectId: project._id} }"
        >{{project.title}}</router-link>
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
      projects: []
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
        `${process.env.VUE_APP_API_URL}projects/${projectId}`.then(function() {
          this.getProjects();
        })
      );
    }
  },

  created: function() {
    this.getProjects();
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
</style>
