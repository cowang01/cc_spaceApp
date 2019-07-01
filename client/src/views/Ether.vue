<template lang="html">
  <div class="">
    <h3>BBC SPACE</h3>
    <div class="planets">
      <ul class="planets" v-for="body in all_planets">
        <li v-on:click="bodyChoice(body)" v-if="body.type === 'planet'">{{body.name}}</li>
      </ul>
    </div>
    <br>
    <div class="planet-data">
      <space-body :body="bodySelect"></space-body>
      <space-fact :body="bodySelect"></space-fact>
    </div>
  </div>
</template>

<script>
import SpaceBody from '@/components/SpaceBody.vue'
import SpaceFact from '@/components/SpaceFact.vue'
import SpaceServices from '@/services/SpaceServices.js'

export default {
  components: {
    'space-body': SpaceBody,
    'space-fact': SpaceFact
  },
  data(){
    return {
      all_planets: [],
      bodySelect: ""
    }
  },
  mounted(){
    SpaceServices.getSpace()
    .then( space => this.all_planets = space )
  },
  methods: {
    bodyChoice(body){
      this.bodySelect = body
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
