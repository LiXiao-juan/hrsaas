<template>
  <div style="margin: 0 10px">
    <svg-icon
      iconClass="fullscreen"
      className="fullscreen"
      @click="onFullScreen"
    />
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'Fullscreen',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {
    onFullScreen() {
      if (screenfull.isEnabled) {
        screenfull.request()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.fullscreen {
  color: #fff;
}
</style>
