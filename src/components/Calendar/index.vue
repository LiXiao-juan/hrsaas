<template>
  <div class="calendar">
    <el-row type="flex" justify="end">
      <el-col :span="6">
        <el-select v-model="currentYear" @change="updateCalendar">
          <el-option
            v-for="item in years"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5" style="margin-left: 10px">
        <el-select v-model="currentMonth" @change="updateCalendar">
          <el-option v-for="item in 12" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <!-- 日历表 -->
    <el-calendar v-model="currentDate">
      <template v-slot:dateCell="{ date }">
        {{ date.getDate() }}
        <span v-if="isWeek(date)" class="rest">休</span>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  components: {},
  data() {
    return {
      currentYear: 2022,
      currentMonth: 3,
      years: [],
      currentDate: new Date()
    }
  },
  created() {
    this.initCalendar()
  },
  methods: {
    initCalendar() {
      const date = new Date()
      this.currentYear = date.getFullYear()
      this.currentMonth = date.getMonth() + 1
      this.years = Array(11)
        .fill(this.currentYear - 5)
        .map((item, i) => item + i)
    },
    isWeek(date) {
      return date.getDay() === 6 || date.getDay() === 0
    },
    updateCalendar() {
      this.currentDate = this.currentYear + '-' + this.currentMonth
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-calendar {
  .el-calendar__header {
    display: none;
  }
  .el-calendar-table td {
    border: none !important;
  }
  .el-calendar-day {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.rest {
  background: #fa7c4d;
  display: inline-block;
  position: relative;
  top: -1px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  border-radius: 50%;
  color: #fff;
  margin-left: 2px;
  text-align: center;
}
</style>
