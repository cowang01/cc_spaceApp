<template lang="html">
<<<<<<< HEAD
  <div class="planet-info">
    <ul v-for="(item, key) in displayBody">
      <li v-if="key != '_id' && key != 'type'">{{key}}:  {{item}}</li>
=======
  <div class="">
    <!-- <ul v-for="(item, key) in displayBody"> -->
    <ul v-if="body">
      <li>Name:  {{displayBody.name}}</li>
      <li>Orbital Period:  {{displayBody.orbitalPeriodPYear}}</li>
      <li>Length Of One Day:  {{displayBody.rotationalPeriodDay}}</li>
      <li>Distance From Sun:  {{displayBody.distanceFromSun}}</li>
      <li>Diameter:  {{displayBody.diameter}}</li>
      <li>Number of Satalites:  {{displayBody.numberOFSatalites}}</li>
      <li>Temperature:  {{displayBody.temperature}}</li>
      <li>Description:  {{displayBody.description}}</li>
>>>>>>> 04a044f7a52c2e94924a14bde8341d3f73c19f58
    </ul>
    <!-- </ul> -->
  </div>
</template>
<script>

import ListItem from './ListItem.vue';

export default {
  name: 'space-body',
  props: ['body'],
  data(){
    return{
      displayBody: ''
    }
  },
  watch: {
    body: function(valNew, valOld) {
      this.displayBody = valNew
    }
  }
}
</script>

<style lang="css" scoped>
ul{
  text-align: left;
  list-style: none;
}

  .planet-info {
    width: 25%;
  	margin: 0 auto;
  	background: rgba(255, 255, 255, 0.6);
  	padding: 20px;
  	margin-bottom: 30px;
}

</style>
