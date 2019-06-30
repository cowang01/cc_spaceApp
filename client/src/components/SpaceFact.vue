
<template lang="html">
  <div class="fact-box">
    <p>{{body.name}} is a {{fact_group}}</p>
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
      fact_list: [],
      fact_group: 'all'
    }
  },
  mounted(){
    SpaceServices.getSpace()
    .then( facts => this.all = facts);
  },
  watch:{
    body: function(valNew, valOld){
      this.fact_group = valNew.type;
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
