import request from '@/utils/request'

export function getEquipments() {
  return request({
    url: '/equipment',
    method: 'get'
  })
}

export function getHistoryData(params) {
  return request({
    url: '/data/history',
    method: 'get',
    params
  })
}
