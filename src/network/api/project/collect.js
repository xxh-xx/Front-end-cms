import request from '@/network/request'

export function getCollect(currentPage,queryCriteria){
    return request({
        url: "/collect/getCollect/"+currentPage,
        method: "post",
        data: queryCriteria
    })
}