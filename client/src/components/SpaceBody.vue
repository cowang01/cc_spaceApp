<template lang="html">

  <div class="planet-info">
    <ul v-for="(item, key) in displayBody"/>
      <li v-if="key != '_id' && key != 'type'">{{key}}:  {{item}}</li>

  <div class="">
    <!-- <ul v-for="(item, key) in displayBody"> -->
    <div v-if="body">
      <h3>{{displayBody.name}}</h3>
      <img class="planet-img" :src="displayBody.img" />
      <h4>Orbital Period:  {{displayBody.orbitalPeriodPYear}}</h4>
      <h4>Length Of One Day:  {{displayBody.rotationalPeriodDay}}</h4>
      <h4>Distance From Sun:  {{displayBody.distanceFromSun}}</h4>
      <h4>Diameter:  {{displayBody.diameter}}</h4>
      <h4>Number of Satallites:  {{displayBody.numberOfSatellites}}</h4>
      <h4>Temperature: {{displayBody.temperature}}</h4>
      <h4>Description:  {{displayBody.description}}</h4>
    </div>
  </div>
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
    position: relative;
    left: 5px;
    width: 15%;
  	margin-left: 0px;
  	background: rgba(255, 255, 255, 0.3);
    color: white;
  	padding: 20px;
  	margin-bottom: 30px;
}
p {
  text-align: left;

}
h4 {
  text-align: left;
}

</style>
