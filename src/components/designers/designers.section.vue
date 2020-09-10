<template>
  <section class="designers">
    <h1 class="designers__bg-head">
      Who <br />
      Are We
    </h1>
    <div class="designers__section">
      <h5 
      v-for="index in 4" :key="index"
      :class="'designers__row designers__row--' + index">
        <span v-for="(designer, i) in designers" :key="i">
          <a :href="designer.url">{{ designer.name }} • </a>
        </span>
      </h5>
    </div>
  </section>
</template>

<script>
export default {
  name: "Designer Component",
  data: function() {
    return {
      designers: [],
    };
  },
  methods: {
    getDesigners: function() {
      this.$http.get(`${process.env.VUE_APP_API}authors`).then(function(data) {
        this.designers = data.body;
      });
    },
  },

  created: function() {
    this.getDesigners();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.designers {
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;

  display: flex;
  align-items: center;

  &__bg-head {
    font-size: 44em;
    line-height: 0.75em;
    position: absolute;
    top: -50px;
    margin: 0px;
    width: 100vw;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    text-align: center;
    color: $primary-charcoal;
    opacity: 3%;
  }

  &__row {
    font-family: $font-main;
    font-style: normal;
    font-weight: 900;
    font-size: 80px;
    margin: 0px;
    color: $seccondary-sun_burn;
    white-space: nowrap;
    line-height: 1.4em;
    text-transform: uppercase;
    will-change: transform;

    animation: marquee 13s linear infinite;

    &--2 {
      animation: marquee 10s linear infinite;
    }
    &--3 {
      animation: marquee 11s linear infinite;
    }
    &--4 {
      animation: marquee 8s linear infinite;
    }

    &:hover {
      animation-play-state: paused;
    }

    span {
      a {
        text-decoration: none;
        color: inherit;
      }

      &:hover {
        color: $primary-charcoal;
        text-decoration: underline;
      }
    }
  }

  &__section {
    width: 100vw;
  }
}
</style>
