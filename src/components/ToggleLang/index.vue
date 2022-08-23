<template>
  <div>
    <el-dropdown @command="onCommand">
      <span class="el-dropdown-link">
        <svg-icon style="color: #fff; font-size: 20px" icon-class="language" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, key) in messages"
          :key="key"
          :command="key"
          >{{ item.name }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import { messages } from '@/i18n'
export default {
  name: 'ToggleLang',
  components: {},
  data() {
    return {
      messages
    }
  },
  created() {},
  methods: {
    onCommand(val) {
      this.$i18n.locale = val
      location.reload()
      Cookie.set('lang',val)
    }
  }
}
</script>

<style scoped lang="scss"></style>
