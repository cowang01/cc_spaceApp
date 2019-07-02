<template lang="html">

  <div v-if="body">
    <!-- <ul v-for="(item, key) in displayBody"/>
      <li v-if="key != '_id' && key != 'type'">{{key}}:  {{item}}</li> -->


    <!-- <ul v-for="(item, key) in displayBody"> -->
    <div class="planet-info">
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


  .planet-info {
    display: inline-block;
    position: absolute;
    left: 25%;
    top: 75%;
    font-style: italic;
    font-size: 20px;
    text-align: center;
    border-radius: 16px;
    background-size: contain;
    color: white;
    border: white;
    background: rgba(255, 255, 255, 0.3);


    width: 50%;
    max-height: 200px;
    border-style: solid;
    overflow: scroll;
}
p {
  text-align: left;

}
h4 {
  text-align: left;
}

</style>
