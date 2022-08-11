import request from '@/utils/request'

/**
 *  获取员工列表
 * @param {*} params  page 页码  size 每页条数
 * @returns  Promise
 */
export function getEmployeeApi(params) {
  return request({
    url: '/sys/role',
    params
  })
}

/**
 *  根据ID删除角色
 * @param {*} id
 * @returns
 */
export function delEmployeeApi(id) {
  return request({
    url: `/sys/role/${id}`,
    method: 'DELETE'
  })
}

/**
 * 
 * @param {*} data name:角色名称   region:角色描述	
 * @returns 
 */
export function addEmployeeApi(data) {
  return request({
    url: '/sys/role',
    method: 'POST',
    data
  })
}
