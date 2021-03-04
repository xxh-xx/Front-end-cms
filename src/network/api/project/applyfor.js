import request from '@/network/request'

export function getApplyFor(currentPage,queryCriteria){
    return request({
        url: "/applyfor/getApplyFor/"+currentPage,
        method: "post",
        data: queryCriteria
    })
}