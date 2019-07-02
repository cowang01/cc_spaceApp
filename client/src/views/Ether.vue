<template lang="html">
  <div class="">
    <h1>BBC DiscoverED</h1>
    <div>
      <!-- <ul class="planets" v-for="body in all_planets">
        <li v-on:click="bodyChoice(body)" v-if="body.type === 'planet'">{{body.name}}</li>
      </ul> -->
    </div>
    <div class="planet-fact">
      <space-fact :body="bodySelect"></space-fact>
    </div>
    <div >
      <space-body :body="bodySelect"></space-body>
      <!-- <list-item :body="bodySelect"></list-item> -->
    </div>

  </div>
</template>

<script>
import SpaceBody from '@/components/SpaceBody.vue'
import SpaceFact from '@/components/SpaceFact.vue'
import SpaceServices from '@/services/SpaceServices.js'
import {eventBus} from '@/main.js'
import ListItem from '@/components/ListItem.vue'

export default {
  components: {
    'space-body': SpaceBody,
    'space-fact': SpaceFact,
    'list-item': ListItem
  },
  data(){
    return {
      all_planets: [],
      bodySelect: "",
      bodyName: null
    }
  },
  mounted(){
    SpaceServices.getSpace()
    .then( space => this.all_planets = space );

    eventBus.$on('body-name', (name) => {this.bodyName = name})
    // {this.bodyName = name}
  },
  methods: {
    bodyChoice(body){
      this.bodySelect = body
    }
  },
  watch: {
    bodyName: function(valNew, valOld){
      this.bodySelect = this.all_planets.find( findBody => findBody.name === valNew)
    }
  }
}
</script>

<style lang="css" scoped>


.planet-data{
  /* display: flex;
  flex-direction: left;
  height: 0px;
  width: 35%;
  justify-content: flex-start; */
  display: inline-block;
  margin-top: 300px;

}

.planet-fact {
  position: relative;
  bottom: 0px;
  margin-top: 30px;
  text-align: center;
  align-items: center;
  height: 0;
  border-radius: 16px;
}
space-body{
  width: 60%;
  height: 40vh;
  font-size: 40px;
}

h1 {
  text-align: center;
  font-size: 75px;

}


</style>
