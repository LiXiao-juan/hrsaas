import request from '@/utils/request'

export function getEmployeesListApi() {
  return request({
    url: '/sys/user/simple'
  })
}
