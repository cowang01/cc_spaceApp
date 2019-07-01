<template lang="html">
  <div class="">
    <p>Test-spacebody</p>
  </div>
</template>
<script>

import ListItem from './ListItem.vue';

export default {
  name: 'space-body',
  props: ['bodies'],
  components: {
    "list-item": ListItem
  }
}
</script>

<style lang="css" scoped>
</style>
