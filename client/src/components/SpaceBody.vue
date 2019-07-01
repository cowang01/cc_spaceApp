<template lang="html">
  <div class="planet-info">
    <ul v-for="(item, key) in displayBody">
      <li v-if="key != '_id' && key != 'type'">{{key}}:  {{item}}</li>
    </ul>
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
    width: 25%;
  	margin: 0 auto;
  	background: rgba(255, 255, 255, 0.6);
  	padding: 20px;
  	margin-bottom: 30px;
}

</style>
