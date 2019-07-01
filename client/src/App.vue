<template>
  <div id="app">
    <p>test-apphome</p>
    <router-link :to="{ name: 'ether'}">Home</router-link>
    <router-view id="App"></router-view>

  </div>
</template>

<script>

import SpaceBody from './components/SpaceBody.vue';
import SpaceFact from './components/SpaceFact.vue';


export default {
  name: 'app',
  data () {
    return {
      bodies: [],
      selectedBody: null
    }
  },
  mounted(){
    fetch('http://localhost:3000/api/space')
    .then(res => res.json())
    .then(bodies => this.bodies = bodies.name);
  },
  components: {
    "space-body": SpaceBody,
    "space-fact": SpaceFact
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
