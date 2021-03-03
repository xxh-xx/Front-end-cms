import request from "@/network/request";

//获取所有文章数据
export function getArticles() {
  return request({
    url: "/article/getArticles",
    method: "get",
  });
}

//获取特定文章
export function getArticleBy(type, queryInfo, current) {
  return request({
    url: "/article/getArticle/" + current,
    method: "post",
    params: {
      type,
    },
    data: queryInfo,
  });
}

//添加文章
export function addArticle(type, article,key) {
  return request({
    url: "/article/addArticle",
    method: "post",
    params: {
      type: type,
      key: key,
    },
    data: article,
  });
}
