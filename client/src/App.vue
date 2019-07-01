<template>
  <div id="app">
    <map name="planetmap">
      <img src="../dist/img/planet.jpeg"  alt="Planets" usemap="#planetmap">
      <area shape="poly" coords="0,144,26,158,47,170,83,196,129,236,163,277,188,316,211,364,228,418,233,473,235,510,229,547,220,596,209,632,192,668,174,699,148,736,129,760,94,788,61,812,19,835,1,843" alt="Sun" href="sun.htm">
      <area shape="poly" coords="0,144,26,158,47,170,83,196,129,236,163,277,188,316,211,364,228,418,233,473,235,510,229,547,220,596,209,632,192,668,174,699,148,736,129,760,94,788,61,812,19,835,1,843" alt="Mercury" href="mercur.htm">
      <area shape="circle" coords="462,541" alt="Venus" href="venus.htm">
      <area shape="circle" coords="652,535" alt="Earth" href="Earth.htm">
      <area shape="circle" coords="833,539" alt="Mars" href="Mars.htm">
    </map>
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
#planetmap {
  /* background-image: url("../dist/img/planet.jpeg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  background-image:100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #white;
  margin-top: 60px;
}
</style>
