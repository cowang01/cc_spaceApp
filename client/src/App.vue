<template>
  <div id="app">
    <p>test-apphome</p>
    <!-- <router-link :to="{ name: 'ether'}">Ether</router-link> -->
    <router-view id="App"></router-view>

  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  },
  mounted(){
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(json => this.serverMessage = json.message);
  },
  data () {
    return {
      serverMessage: ""
    }
  }
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
