import request from "@/utils/request"
import { Data } from "@/types/api"

// get请求
function dict(params?: Data) {
  return request({
    url: "/fmsv2/society/getDuBanTypeCount",
    method: "get",
    params,
  })
}

function dict2(params?: Data) {
  return request({
    url: "/fmsv2/society/getTankThroughTitleDataList",
    method: "get",
    params,
  })
}

// 统一导出
export { dict, dict2 }
