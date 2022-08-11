<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools>
        <span slot="left-tag">共{{ total }}条记录</span>
        <template slot="right">
          <el-button type="danger">普通excel导出</el-button>
          <el-button type="info">复杂表头excel导出</el-button>
          <el-button type="success">excel导入</el-button>
          <el-button type="primary">新增员工</el-button>
        </template>
      </page-tools>
      <!-- 放置表格和分页 -->
      <el-card>
        <el-table border :data="employeesList">
          <el-table-column label="序号" sortable="" type="index" />
          <el-table-column label="姓名" sortable="" prop="username" />
          <el-table-column label="工号" sortable="" prop="workNumber" />
          <el-table-column
            label="聘用形式"
            sortable=""
            prop="formOfEmployment"
          />
          <el-table-column label="部门" sortable="" prop="departmentName" />
          <el-table-column label="入职时间" sortable="" prop="timeOfEntry" />
          <el-table-column label="账户状态" sortable="" prop="enableState" />
          <el-table-column label="操作" sortable="" fixed="right" width="280">
            <template>
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small">角色</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-row
          type="flex"
          justify="center"
          align="middle"
          style="height: 60px"
        >
          <el-pagination
            layout="prev, pager, next"
            :page-size="params.size"
            :total="total"
            @current-change="currentChange"
          />
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getEmployeesInfoApi } from '@/api/employees'
export default {
  data() {
    return {
      params: {
        page: 1,
        size: 9
      },
      total: 0,
      employeesList: []
    }
  },

  created() {
    this.getEmployeesInfo()
  },

  methods: {
    // 员工详情列表请求
    async getEmployeesInfo() {
      const { rows, total } = await getEmployeesInfoApi(this.params)
      this.employeesList = rows
      this.total = total
    },
    // 点击页数时调用
    currentChange(val) {
      this.params.page = val
      this.getEmployeesInfo()
    }
  }
}
</script>

<style scoped lang="less"></style>
