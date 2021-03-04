<template>
  <div class="collect">
    <query-form @submitForm="submitForm" @resetForm="resetForm" :formItemData="formItemData" />
    <generate-table
      :tableData="tableData"
      :tableColumn="tableColumn"
      :pageSize="pageSize"
      :total="total"
      :currentPage="currentPage"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>
import GenerateTable from "@/components/common/util/generator/GenerateTable";
import QueryForm from "@/components/common/util/generator/QueryForm";
import { getCollect } from "@/network/api/project/collect";
import { collectForFormItemData } from "@/common/const";
export default {
  name: "Collect",
  components: {
    GenerateTable,
    QueryForm,
  },
  created() {
    this.getTableData();
  },
  data() {
    return {
      currentPage: 1,
      queryCriteria: {},
      tableData: [],
      pageSize: 10,
      total: 0,
      tableColumn: [
        { prop: "cid", label: "分类" },
        { prop: "name", label: "项目名" },
        { prop: "att", label: "att" },
        { prop: "author", label: "作者" },
        { prop: "date", label: "发布日期" },
        { prop: "hits", label: "点击量" },
      ],
      formItemData: collectForFormItemData,
    };
  },
  methods: {
    getTableData() {
      getCollect(this.currentPage, this.queryCriteria)
        .then((res) => {
          this.tableData = res.data.data.items;
          this.pageSize = res.data.data.size;
          this.total = res.data.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentChange(currentPage) {
      this.currentPage = currentPage;
      this.getTableData();
    },
    submitForm(event,queryFormData){
      event.validate((valid) => {
          if (valid) {
            this.queryCriteria = queryFormData;
            this.getTableData();
          } else {
            this.$message({
              message: "输入的值有误，请重新输入！",
              type: "error",
            })
            return false;
          }
        });
    },
    resetForm(event){
      this.queryCriteria = {}
      this.getTableData()
      event.resetFields();
    }
  },
};
</script>