<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="box-card">
        <!-- 头部 -->
        <Tree :treeNode="company" :isRoot="true" @add="showAddDepts"></Tree>
        <!-- 树形 -->
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <template v-slot="{ data }">
            <Tree :treeNode="data" @delDepts="loadDepts" @add="showAddDepts" />
          </template>
        </el-tree>
      </el-card>
    </div>
    <!-- 添加弹层 -->
    <AddDept :visible.sync="dialogVisible" :currentDept="currentDept"></AddDept>
  </div>
</template>

<script>
import AddDept from './components/add-dept.vue'
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
      dialogVisible: false,
      company: { name: '传智教育', manager: '负责人' },
      currentDept: {}
    }
  },
  components: {
    Tree,
    AddDept
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
    },
    // 开启弹层 存子向父传的数据
    showAddDepts(val) {
      this.dialogVisible = true
      this.currentDept = val
    }
  }
}
</script>

<style scoped lang="scss">
.el-dropdown-link {
  cursor: pointer;
}
</style>
