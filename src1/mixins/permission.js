import permissionsPoints from '@/constant/permission'

export default {
  data() {
    return {
      points: permissionsPoints
    }
  },
  methods: {
    isHas(val) {
      return this.$store.state.permisson.points.includes(val)
    }
  }
}
