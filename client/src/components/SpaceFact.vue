
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
    display: inline-block;

    font-style: italic;
    font-size: 30px;
    text-align: center;
    border-radius: 16px;
    background-size: contain;
    color: white;
    border: white;
    background: rgba(255, 255, 255, 0.3);
  	margin: 0 auto;
    width: 35%;
    border-style: solid;
  }


</style>

<!-- fact.name === this.fact_group &&  -->
