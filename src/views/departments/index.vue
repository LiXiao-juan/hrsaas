<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="box-card">
        <!-- 头部 -->
        <Tree :treeNode="company" :isRoot="true"></Tree>
        <!-- 树形 -->
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
            <template v-slot="{ data }">
              <Tree :treeNode="data" />
            </template>
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import Tree from '@/views/departments/components/tree-tools.vue'
export default {
  data() {
    return {
      departs: [
        { name: '总裁办', children: [{ name: '董事会' }] },
        { name: '行政部' },
        { name: '人事部' }
      ],
      defaultProps: {
        label: 'name' // 展示到树状的数据
      },
      company: { name: '传智教育', manager: '负责人' }
    }
  },
  components: {
    Tree
  },
  created() {},

  methods: {}
}
</script>

<style scoped lang="scss">
.el-dropdown-link {
  cursor: pointer;
}
</style>
