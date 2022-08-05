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
import { transListToTree } from '@/utils'
import Tree from '@/views/departments/components/tree-tools.vue'
import { getDeptsApi } from '@/api/departments'
export default {
  data() {
    return {
      departs: [],
      defaultProps: {
        label: 'name' // 展示到树状的数据
      },
      company: { name: '传智教育', manager: '负责人' }
    }
  },
  components: {
    Tree
  },
  created() {
    this.loadDepts()
  },

  methods: {
    // 获取树状信息
    async loadDepts() {
      const res = await getDeptsApi()
      this.departs = transListToTree(res.depts, '')
      console.log(res.depts)
    }
  }
}
</script>

<style scoped lang="scss">
.el-dropdown-link {
  cursor: pointer;
}
</style>
