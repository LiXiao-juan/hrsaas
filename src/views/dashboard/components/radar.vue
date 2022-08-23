<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.initMyCharts()
  },
  methods: {
    initMyCharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'))

      const myOptions = {
        title: {
          text: '人员绩效表'
        },
        legend: {
          data: ['张三', '李四']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '加班', max: 6500 },
            { name: 'bug数量', max: 16000 },
            { name: '迟到', max: 30000 },
            { name: '早退', max: 38000 },
            { name: '打游戏', max: 52000 },
            { name: '摸鱼', max: 25000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '张三'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '李四'
              }
            ]
          }
        ]
      }
      // 绘制图表
      myChart.setOption(myOptions)
    }
  }
}
</script>

<style scoped lang="scss">
#main {
  width: 500px;
  height: 500px;
}
</style>
