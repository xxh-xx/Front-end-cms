<template>
  <div class="queryForm">
    <el-form
      :rules="rules"
      :inline="true"
      size="small"
      ref="queryFormData"
      :model="queryFormData"
    >
      <el-form-item
        v-for="(data, index) in formItemData"
        :key="index"
        :prop="data.prop"
      >
        <el-input
          v-if="data.type == 'input.text'"
          v-model="queryFormData[data.name]"
          :placeholder="data.placeholder"
          clearable
        ></el-input>
        <el-input
          v-if="data.type == 'input.number'"
          v-model.number="queryFormData[data.name]"
          :placeholder="data.placeholder"
          clearable
        ></el-input>
        <el-select
          v-if="data.type == 'select'"
          v-model="queryFormData[data.name]"
          :placeholder="data.placeholder"
          clearable
        >
          <el-option
            v-for="item in data.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="block" v-if="data.type == 'date'">
          <el-date-picker
            v-model="queryFormData[data.name]"
            type="date"
            :placeholder="data.placeholder"
            :editable="false"
            clearable
          >
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('queryFormData')">
          查询
        </el-button>
        <el-button @click="resetForm('queryFormData')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { projectQueryRules } from "@/common/const";
export default {
  name: "QueryForm",
  props: {
    formItemData: {
      type: Array,
      require: true,
      default() {
        return [
          {
            placeholder: "提示文字",
            name: "name",
            prop: "prop",
            type: "",
            options: [],
          },
        ];
      },
    },
  },
  data() {
    return {
      queryFormData: {},
      rules: projectQueryRules,
    };
  },
  methods: {
    submitForm(formName) {
      this.$emit("submitForm", this.$refs[formName],this.queryFormData);
    },
    resetForm(formName) {
      this.$emit("resetForm", this.$refs[formName]);
    },
  },
};
</script>