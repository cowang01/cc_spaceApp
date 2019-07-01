
<template lang="html">
  <div class="fact-box">
    <p>{{fact_list[random]}}</p>
    <p></p>
  </div>
</template>

<script>
import SpaceServices from '@/services/SpaceServices.js'

export default {
  name: 'fact-box',
  props: ['body'],
  data() {
    return {
      all: [],
      fact_list: ['Click On A Planet To Explore'],
      fact_group: [],
      random: 0
    }
  },
  mounted(){
    SpaceServices.getSpace()
    .then( facts => this.all = facts);
  },
  watch:{
    body: function(valNew, valOld){
      this.fact_group = valNew.type;
      const newFacts = [];
      this.all.forEach(function(spaceBody){
        if (spaceBody.type === 'fact' && spaceBody.name === valNew.name){
          newFacts.push(spaceBody.fact)
        };
      })
      this.fact_list = newFacts;
      this.random = Math.floor(Math.random()*this.fact_list.length)
    }
  }
}

</script>

<style lang="css" scoped>

  .fact-box {
    border-style: solid;
    border-color: black;
    border-width: thin;
    text-align: center;
    align-items: center;
    height: 20%;
    border-radius: 16px;
  }
</style>

<!-- fact.name === this.fact_group &&  -->
