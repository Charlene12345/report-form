import axios from 'axios'

const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeoutL: 5000 // 请求超时为5秒
})

// response interceptor
service.interceptors.response.use(
  response => {
    // response拦截器会将 response 作为返回值
    console.log(response.data)
    // 数据在 response.data 中，所以当 response.data 中包含数据才认为通过
    // 在接收响应时 做些什么
    if (response.status === 200 && response.data) {
      return response.data
    } else {
      // 对请求进行拦截
      return Promise.reject(new Error('请求失败'))
    }
  },
  // 请求失败的处理  对响应错误做些什么
  error => {
    return Promise.reject(error)
  }
)

export default service
