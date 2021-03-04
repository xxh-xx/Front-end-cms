import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("@/viwes/home/home.vue");

const ArticleList = () => import("@/viwes/article/articleList/ArticleList.vue");
const AddArticle = () => import("@/viwes/article/addArticle/AddArticle.vue");
const ApplyFor = () => import("@/viwes/project/applyFor/ApplyFor.vue");
const Collect = () => import("@/viwes/project/collect/Collect.vue");
const Research = () => import("@/viwes/project/research/Research.vue")

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      index: "/home",
      text: ["首页"],
    },
  },
  {
    path: "/home",
    component: Home,
    meta: {
      index: "/home",
      text: ["首页"],
    },
  },
  {
    path: "/article/articleList",
    component: ArticleList,
    meta: {
      index: "/article/articleList",
      text: ["首页", "文章管理", "文章列表"],
    },
  },
  {
    path: "/article/addArticle",
    component: AddArticle,
    meta: {
      index: "/article/addArticle",
      text: ["首页", "文章管理", "添加文章"],
    },
  },
  {
    path: "/project/applyfor",
    component: ApplyFor,
    meta: {
      index: "/project/applyfor",
      text: ["首页", "项目管理", "项目申报库"],
    },
  },
  {
    path: "/project/collect",
    component: Collect,
    meta: {
      index: "/project/collect",
      text: ["首页", "项目管理", "征集项目库"],
    },
  },
  {
    path: "/project/research",
    component: Research,
    meta: {
      index: "/project/research",
      text: ["首页", "项目管理", "研究项目"],
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
