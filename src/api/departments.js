import request from '@/utils/request'
/**
 *  查询企业的部门列表
 * @returns Promise
 */
export function getDeptsApi() {
  return request({
    url: '/company/department'
  })
}

/**
 *  根据ID查询部门详情
 * @returns Promise
 */
export function getDeptsInfoApi(id) {
  return request({
    url: `/company/department/${id}`
  })
}

/**
 *  删除部门
 * @param {*} id
 * @returns  Promise
 */
export function delDeptsInfoApi(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'DELETE'
  })
}

/**
 *  添加部门
 * @param {Object} data
 * @returns  Promise
 */
export function addDept(data) {
  return request({
    url: '/company/department',
    method: 'POST',
    data
  })
}
