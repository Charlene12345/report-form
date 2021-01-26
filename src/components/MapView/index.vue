<template>
  <b-map></b-map>
</template>

<script>
import BMap from '../../views/BMap'
export default {
  name: 'index',
  components: {
    BMap
  }
}
</script>

<style lang="scss" scoped>
  .map-view{
    .map{
      height: 1600px;
    }
  }
</style>
