<template>
  <v-app>
    <app-bar/>
    <v-container fluid pa-0>
      <div class="progress-bar lighten-2"
           :class="[colorClass]"
           :style="{height: $store.state.percentageOfProgress + '%'}"></div>
      <div class="progress-paused"
           v-if="$store.state.initiated && !$store.state.running"></div>
      <v-row align="center"
             justify="center"
             class="lighten-1"
             :class="[colorClass]"
             :style="{height: windowSize.y + 'px'}">
        <div>
          <tasks/>
          <timer/>
        </div>
      </v-row>
    </v-container>
    <app-footer/>
  </v-app>
</template>

<script>
  import Tasks from './components/Tasks'

  export default {
    name: "App",
    components: {Tasks},
    data: () => ({
      windowSize: {
        x: 0,
        y: 0,
      },
    }),
    computed: {
      colorClass () {
        if(this.$store.state.initiated && !this.$store.state.running) {
            return 'paused'
        }
        return this.$store.state.settings[this.$store.state.task].color
      }
    },
    mounted () {
      this.onResize()
    },
    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      }
    }
  }
</script>

<style>

  .theme--dark.v-card, .theme--dark.v-btn {
    color: rgba(255,255,255,.95) !important;
  }

  .v-btn {
    margin: 0 10px;
    text-transform: capitalize!important;
  }

  .pomodoro {
    background: red;
  }

  .progress-bar {
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: .2s;
  }

  .progress-bar.paused {
    background-color: rgba(0,0,0,.05);
  }

  .progress-paused {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: .2s;
    background-color: rgba(0,0,0,.05);
  }

  .paused {
    background-color: #535362;
  }
</style>