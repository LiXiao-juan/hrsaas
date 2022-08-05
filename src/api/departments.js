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