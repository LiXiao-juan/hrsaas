import request from '@/utils/request'

/**
 *  简单员工
 * @returns Promise
 */
export function getEmployeesListApi() {
  return request({
    url: '/sys/user/simple'
  })
}

/**
 *  获取员工信息详情
 * @param {*} params 
 * @returns 
 */
export function getEmployeesInfoApi(params) {
  return request({
    url: '/sys/user',
    params
  })
}
