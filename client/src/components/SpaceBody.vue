<template lang="html">
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

</style>
