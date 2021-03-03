<template>
  <el-container>
    <el-aside width="auto">
      <left :collapse="isCollapse"></left>
    </el-aside>
    <el-container>
      <el-header>
        <top
          v-on:collapseClick="changeWidth($event)"
        ></top>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Left from '@/components/common/aside/Left'
import Top from '@/components/common/header/Top'
export default {
  name: "Index",
  data() {
    return {
      isCollapse: false,
    };
  },
  components: {
    Left,
    Top,
  },
  methods: {
    changeWidth(isCollapse) {
      this.isCollapse = isCollapse;
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: #fff;
}
.el-main{
  height: calc(100vh - 60px);
}
</style>