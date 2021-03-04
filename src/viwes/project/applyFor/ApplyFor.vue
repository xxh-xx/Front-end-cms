<template>
  <div class="applyfor">
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
import QueryForm from '@/components/common/util/generator/QueryForm'
import { applyForFormItemData } from "@/common/const";
import { getApplyFor } from "@/network/api/project/applyfor";
export default {
  name: "ApplyFor",
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
        { prop: "pid", label: "申报人id" },
        { prop: "rid", label: "申报项目id" },
        { prop: "att", label: "att" },
        { prop: "stadate", label: "项目申报日期" },
        { prop: "state", label: "项目状态" },
        { prop: "hits", label: "点击量" },
      ],
      formItemData: applyForFormItemData,
    };
  },
  methods: {
    getTableData() {
      getApplyFor(this.currentPage, this.queryCriteria)
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