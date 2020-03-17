import request from '@/utils/request'

export function getVariable(params) {
  return request({
    url: '/equipment/variable?id=' + params,
    method: 'get',
    params
  })
}

export function updateVariable(params, data) {
  return request({
    url: '/equipment/variable/' + params,
    method: 'patch',
    data
  })
}

export function addVariable(data) {
  return request({
    url: '/equipment/variable',
    method: 'post',
    data
  })
}

export function deleteVariable(data) {
  return request({
    url: '/equipment/variable',
    method: 'delete',
    data
  })
}
