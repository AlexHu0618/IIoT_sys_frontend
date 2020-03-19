import request from '@/utils/request'

export function getSetting() {
  return request({
    url: '/data/setting',
    method: 'get'
  })
}

export function saveSetting(data) {
  return request({
    url: '/data/setting',
    method: 'post',
    data
  })
}
