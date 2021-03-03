<template>
  <div class="top">
    <el-form inline size="small" :model="form" :rules="rules" ref="form">
      <el-form-item class="uniteWidth" prop="cid">
        <el-select v-model="form.cid" placeholder="请选择分类" clearable>
          <el-option
            v-for="item in cidOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          v-model="form.name"
          placeholder="文章标题"
          maxlength="10"
          show-word-limit
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item class="uniteWidth" prop="att">
        <el-select v-model="form.att" placeholder="请选择att" clearable>
          <el-option
            v-for="item in attOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="author" class="uniteWidth">
        <el-input
          v-model="form.author"
          placeholder="文章作者"
          maxlength="5"
          show-word-limit
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="startDate">
        <el-date-picker
          class="uniteWidth"
          v-model="form.startDate"
          type="date"
          placeholder="开始日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="endDate">
        <el-date-picker
          class="uniteWidth"
          v-model="form.endDate"
          type="date"
          placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="startHits">
        <el-input-number
          v-model="form.startHits"
          :min="0"
          :controls="false"
          class="uniteWidth"
        ></el-input-number>
      </el-form-item>
      <el-form-item prop="endHits">
        <el-input-number
          v-model="form.endHits"
          :min="0"
          :controls="false"
          class="uniteWidth"
        ></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitFrom('form')">查询</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { cidOptions, attOptions, articleListFromRules } from "@/common/const";
import { getArticleBy } from "@/network/api/article";
export default {
  name: "top",
  props: {
    activeArticle: {
      type: String,
      required: true,
    },
  },
  methods: {
    submitFrom(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          getArticleBy(this.activeArticle, this.form, 1)
            .then((res) => {
              this.$emit("selectResult", res.data.data);
              this.$emit("sendFormData", this.form);
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          this.$message.error("查询失败，请输入正确的内容。");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      getArticleBy(this.activeArticle, this.form, 1)
        .then((res) => {
          this.$emit("selectResult", res.data.data);
          this.$emit("sendFormData", this.form);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  data() {
    return {
      cidOptions: cidOptions,
      attOptions: attOptions,
      form: {
        cid: "",
        name: "",
        att: "",
        author: "",
        startDate: "",
        endDate: "",
        startHits: "",
        endHits: "",
      },
      rules: articleListFromRules,
    };
  },
};
</script>

<style scoped>
.uniteWidth {
  width: 130px;
}
</style>