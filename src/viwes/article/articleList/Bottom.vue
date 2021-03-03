<template>
  <div class="bottom">
    <el-table :data="localData.data.items" style="width: 100%">
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column prop="cid" label="分类"> </el-table-column>
      <el-table-column
        :prop="localData.active != 'document' ? 'name' : 'title'"
        label="名称"
      >
      </el-table-column>
      <el-table-column prop="att" label="att"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column
        :prop="localData.active != 'document' ? 'date' : 'pubdate'"
        label="发布日期"
      >
      </el-table-column>
      <el-table-column prop="hits" label="点击量" sortable> </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        :total="localData.data.total"
        :current-page="current"
        layout="prev, pager, next, ->, total"
        :page-size="localData.data.size"
        hide-on-single-page
        @prev-click="changeCurrent"
        @next-click="changeCurrent"
        @current-change="changeCurrent"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getArticleBy } from "@/network/api/article";
export default {
  name: "Bottom",
  props: {
    localData: {
      type: Object,
      default() {
        return {};
      },
    },
    formData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      current: this.localData.data.current,
    };
  },
  methods: {
    changeCurrent(current) {
      this.getPageData(current);
    },
    getPageData(current) {
      getArticleBy(this.localData.active, this.formData, current)
        .then((res) => {
          this.localData.data.items = res.data.data.items;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>