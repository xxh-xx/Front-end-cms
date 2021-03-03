<template>
  <div class="top">
    <el-link
      :underline="false"
      @click="[collapseClick(), $emit('collapseClick', isCollapse)]"
    >
      <i :class="isCollapse ? UnFold : Fold"></i>
    </el-link>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(value,index) in this.$route.meta.text" :key="index">{{
        value
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <span class="el-dropdown-link">
        <div class="basic--circle">
          <div class="block">
            <el-avatar
              icon="el-icon-user-solid"
              shape="square"
              :size="50"
            ></el-avatar>
          </div>
        </div>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      isCollapse: false,
      UnFold: "el-icon-s-unfold",
      Fold: "el-icon-s-fold",
    };
  },
  methods: {
    collapseClick() {
      this.isCollapse ? (this.isCollapse = false) : (this.isCollapse = true);
    },
  },
};
</script>

<style scoped>
.top {
  display: flex;
}
.el-link {
  margin-top: 15px;
}
.el-icon-s-fold,
.el-icon-s-unfold {
  font-size: 30px;
}
.el-breadcrumb {
  font-size: 16px;
  margin-top: 22px;
  margin-left: 10px;
}
.el-dropdown {
  position: absolute;
  top: 5px;
  right: 20px;
}
</style>