<template>
  <div id="app">
    <el-container>
      <el-aside width="230px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <Header></Header>
        </el-header>
        <el-main>
          主要区域
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import Aside from '@/viwes/aside/Aside'
import Header from '@/viwes/header/Header'

export default {
  name: "App",
  components: {
    Aside,
    Header
  }
}
</script>

<style>
  html,body{
      padding: 0px;
      margin: 0px;
      font-size: 1vw;
  }
  .el-main{
    border: 1px solid #E6A23C;
  }
</style>