import request from '../utils/request'

const icode = '2011C2F14569B82C'

export function wordcloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: {
      // icode: 'C2CE489D152F6DD7'
      icode
    }
  })
}

export function mapScatter () {
  return request({
    url: '/screen/map/scatter',
    method: 'get'
  })
}

export function screenData () {
  return request({
    url: '/screen/data',
    method: 'get'
  })
}
