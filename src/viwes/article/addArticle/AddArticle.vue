<template>
  <div class="addArticle">
    <el-form
      label-width="100px"
      :rules="rules"
      label-suffix=":"
      ref="form"
      :model="formData"
    >
      <el-form-item label="文章的名" prop="name">
        <el-input
          maxlength="200"
          show-word-limit
          clearable
          v-model="formData.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="文章的子名" prop="subname">
        <el-input
          maxlength="200"
          show-word-limit
          clearable
          v-model="formData.subname"
        ></el-input>
      </el-form-item>
      <el-form-item label="来源" prop="source">
        <el-input
          maxlength="200"
          show-word-limit
          clearable
          v-model="formData.source"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <div id="content">
          <tinymce-box
            v-on:onClick="onClick"
            v-on:sendKey="key = $event"
          ></tinymce-box>
        </div>
      </el-form-item>
      <el-form-item class="select" label="分类" prop="cid">
        <el-select v-model="formData.cid" placeholder="请选择">
          <el-option
            v-for="item in cidOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="select" label="att" prop="att">
        <el-select v-model="formData.att" placeholder="请选择">
          <el-option
            v-for="item in attOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="select" label="文章类型">
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">
          立即创建
        </el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import TinymceBox from '@/components/common/util/TinymceBox'
import { addArticle } from "@/network/api/article";
import {
  cidOptions,
  attOptions,
  addArticleRules,
  typeOptions,
} from "@/common/const";
export default {
  name: "AddArticle",
  components: {
    TinymceBox,
  },
  data() {
    return {
      formData: {
        name: "",
        subname: "",
        source: "",
        content: "",
        cid: "",
        att: "",
        resume: "",
      },
      editor: null,
      type: "",
      cidOptions: cidOptions,
      attOptions: attOptions,
      typeOptions: typeOptions,
      rules: addArticleRules,
      key: "",
    };
  },
  methods: {
    submitForm(formName) {
      if (this.editor == null && this.type == "") {
        this.$message.error("创建失败，请输入正确的内容。");
        return false;
      }
      this.formData.content = this.editor.getContent();
      this.formData.resume = this.editor.getContent({ format: 'text' });
      if(this.formData.resume.length>150){
        this.formData.resume = this.formData.resume.substring(0,150);
      }
      this.$refs[formName].validate((valid) => {
        if (
          valid &&
          this.formData.content != "" &&
          this.formData.content.length >= 300
        ) {
          addArticle(this.type, this.formData, this.key)
            .then((res) => {
              if (res.data.code == 2000) {
                this.$router.push("/article/articleList");
              }
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          this.$message.error("创建失败，请输入正确的内容。");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.type = "";
      if (this.editor != null) {
        this.editor.setContent("");
      }
    },
    onClick(event, editor) {
      this.editor = editor;
    },
  },
};
</script>

<style scoped>
.select {
  display: inline-block;
}
</style>