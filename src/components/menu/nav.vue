<template> 
</template>

<script>
export default {
  name: "Nav",
  data: function() {
    return {
      links: [
        {
          name: "Home",
          url: "/home",
        },
        {
          name: "About Us",
          url: "/about",
        },
        {
          name: "Designers",
          url: "/designers",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
</style>
