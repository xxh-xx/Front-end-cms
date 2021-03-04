import request from '@/network/request'

export function getResearch(currentPage,queryCriteria){
    return request({
        url: "/research/getResearch/"+currentPage,
        method: "post",
        data: queryCriteria
    })
}