<template>
  <el-menu
    :default-active="this.$route.meta.index"
    class="el-menu-vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    v-bind="$attrs"
    router
  >
    <el-menu-item index="/home">
      <i class="el-icon-house"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">文章管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/article/articleList">文章列表</el-menu-item>
        <el-menu-item index="/article/addArticle">添加文章</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Left",
  inheritAttrs: false,
  data() {
    return {
      menuText: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
.el-menu {
  height: 100vh;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>