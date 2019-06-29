
<template lang="html">
  <div class="fact-box">
    <p>test-fact_box</p>
    <p>{{all}}</p>
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

  }
}
</script>

<style lang="css" scoped>

  .fact-box {
    border-style: solid;
    border-color: black;
    border-width: thick;
    text-align: center;
    align-items: center;
  }
</style>
