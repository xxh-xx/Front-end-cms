<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
          <i class="el-icon-house"></i>
          <span class="font">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-document"></i><span class="font">文章管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="2-1"><span class="font">查看文章</span></el-menu-item>
            <el-menu-item index="2-2"><span class="font">添加文章</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: "Aside",
}
</script>

<style scoped>
    .el-menu{
        height: 100vh;
    }
    .font{
        font-size: 0.8rem;
    }
</style>