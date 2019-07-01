<template>
  <div id="app">
    <!-- <router-link :to="{ name: 'ether'}">Ether</router-link> -->
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
    // fetch('http://localhost:3000/')
    // .then(res => res.json())
    // .then(json => this.serverMessage = json.message);
  },
}
</script>

<style>
*{
  background-image: url();
  background-size: cover;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
