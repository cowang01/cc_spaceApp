<template lang="html">
  <div class="">
    <h1>BBC DiscoverED</h1>
    <div class="planets">
      <!-- <ul class="planets" v-for="body in all_planets">
        <li v-on:click="bodyChoice(body)" v-if="body.type === 'planet'">{{body.name}}</li>
      </ul> -->
    </div>
    <br>
    <div class="planet-data">
      <space-body :body="bodySelect"></space-body>
      <space-fact :body="bodySelect"></space-fact>
      <list-item :body="bodySelect"></list-item>
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
.planets{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  list-style: none;
}

.planet-data{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

space-body{
  width: 60%;
  height: 20vh;
}

space-fact{
  width: 40%;
  height: 20vh;
}

</style>
