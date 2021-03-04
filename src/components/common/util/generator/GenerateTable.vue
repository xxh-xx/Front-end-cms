<template>
  <div class="generateTable">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(column, index) in tableColumn"
        :key="index"
        :prop="column.prop"
        :label="column.label"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
          >
            查看
          </el-button>
          <el-button
            size="mini"
            type="warning"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next, ->, total"
        :page-size="pageSize"
        :total="total"
        :current-page="currentPage"
        @current-change="currentChange"
        hide-on-single-page
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenerateTable",
  props: {
    tableData: {
      type: Array,
      require: true,
      default() {
        return [];
      },
    },
    tableColumn: {
      type: Array,
      require: true,
      default() {
        return [{ prop: "prop", label: "label" }];
      },
    },
    pageSize: {
      type: Number,
      require: true,
      default: 10,
    },
    total: {
      type: Number,
      require: true,
      default: 0,
    },
    currentPage: {
      type: Number,
      require: true,
      default: 1,
    },
  },
  methods: {
    handleEdit(index, row) {
      this.$emit("handleEdit", index, row);
    },
    handleDelete(index, row) {
      this.$emit("handleDelete", index, row);
    },
    currentChange(currentPage) {
      this.$emit("currentChange", currentPage);
    },
  },
};
</script>