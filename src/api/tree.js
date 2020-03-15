import request from '@/utils/request'

export function getTree() {
  return request({
    url: '/tree',
    method: 'get'
  })
}

export function saveTree(data) {
  return request({
    url: '/tree',
    method: 'post',
    data
  })
}

export function updateTree(data) {
  return request({
    url: '/tree',
    method: 'patch',
    data
  })
}

export function addNode(data) {
  return request({
    url: '/tree',
    method: 'post',
    data
  })
}

export function deleteNode(data) {
  return request({
    url: '/tree',
    method: 'delete',
    data
  })
}
