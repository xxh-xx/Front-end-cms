import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("@/viwes/home/home.vue");

const ArticleList = () => import("@/viwes/article/articleList/ArticleList.vue");
const AddArticle = () => import("@/viwes/article/addArticle/AddArticle.vue");

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      index: '/home',
      text: ["首页"]
    }
  },
  {
    path: "/home",
    component: Home,
    meta: {
      index: '/home',
      text: ["首页"]
    }
  },
  {
    path: "/article/articleList",
    component: ArticleList,
    meta: {
      index: "/article/articleList",
      text: ["首页","文章管理","文章列表"]
    }
  },
  {
    path: "/article/addArticle",
    component: AddArticle,
    meta: {
      index: "/article/addArticle",
      text: ["首页","文章管理","添加文章"]
    }
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
