import request from "@/utils/request"

// get请求
function dict(url: string, params: any) {
  return request({ url, method: "get", params })
}

// post请求
function dict2(url: string, data: any) {
  return request({ url, method: "post", data })
}

// 统一导出
export { dict, dict2 }
