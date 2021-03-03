<template>
  <div class="articleList">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(name, label, index) in tabPanes"
        :key="index"
        :label="label"
        :name="name"
      >
        <common
          v-on:selectResult="changeData($event)"
          :localData="localData"
        ></common>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Common from "@/viwes/article/articleList/Common";
import { getArticles } from "@/network/api/article";
export default {
  name: "ArticleList",
  components: {
    Common,
  },
  created() {
    this.getDatas();
  },
  methods: {
    getDatas() {
      getArticles()
        .then((res) => {
          this.resultData = res.data.data;
          this.localData.active = this.activeName;
          this.localData.data = res.data.data.document;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    handleClick() {
      this.localData.active = this.activeName;
      this.localData.data = this.resultData[this.activeName];
    },
    changeData(data) {
      this.resultData[this.activeName] = data;
      this.handleClick();
    },
  },
  data() {
    return {
      activeName: "document",
      current: 1,
      resultData: null,
      localData: {
        active: "",
        data: {},
      },
      tabPanes: {
        document: "document",
        hot: "hot",
        info: "info",
        notice: "notice",
      },
    };
  },
};
</script>