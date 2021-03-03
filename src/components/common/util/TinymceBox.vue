<template>
  <div class="tinymce-box">
    <editor @onClick="onClick" :init="init"></editor>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
import "tinymce/icons/default/icons";

//插件
//高级列表
import "tinymce/plugins/lists";
import "tinymce/plugins/advlist";
//自动存稿
import "tinymce/plugins/autosave";
//特殊字符
import "tinymce/plugins/charmap";
//全屏
import "tinymce/plugins/fullscreen";
//帮助
import "tinymce/plugins/help";
//水平分割线
import "tinymce/plugins/hr";
//插入当前日期时间
import "tinymce/plugins/insertdatetime";
//超链接
import "tinymce/plugins/link";
//预览
import "tinymce/plugins/preview";
//查找替换
import "tinymce/plugins/searchreplace";
//表格插件
import "tinymce/plugins/table";
//字数统计
import "tinymce/plugins/wordcount";
//插入编辑图片
import "tinymce/plugins/image";

import { updateImage } from "@/network/api/updateFile";

export default {
  name: "TinymceBox",
  components: {
    Editor,
  },
  mounted() {
    tinymce.init({});
  },
  props: {
    plugins: {
      type: [String, Array],
      default:
        "lists,advlist,autosave,charmap,fullscreen,help,hr,insertdatetime,link,preview,searchreplace,table,wordcount,image",
    },
    toolbar: {
      type: [String, Array],
      default:
        "undo redo searchreplace | styleselect fontsizeselect lineheight | bold italic underline strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | link table image",
    },
    menubar: {
      type: [String, Array],
      default: "file edit  insert view table tools help",
    },
    menu: {
      type: [Object],
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      init: {
        height: 500,
        language: "zh_CN",
        language_url: "/tinymce/langs/zh_CN.js",
        skin_url: "/tinymce/skins/ui/oxide",
        content_css_url: "/tinymce/skins/content/default",
        plugins: this.plugins,
        toolbar: this.toolbar,
        menubar: this.menubar,
        placeholder: "请编辑文章内容",
        //默认协议
        link_default_protocol: "https",
        //默认链接打开方式
        default_link_target: "_blank",
        //协议前缀补齐提示
        link_assume_external_targets: true,
        //链接的右键增强菜单
        link_context_toolbar: true,
        //在对话框中隐藏“打开方式”
        target_list: false,
        //图片上传自定义实现
        images_upload_handler: this.imagesUploadHandler,
      },
      key: new Date().getTime(),
    };
  },
  methods: {
    imagesUploadHandler(blobInfo, success, failure, progress) {
      updateImage(blobInfo.blob(), progress,this.key)
        .then((res) => {
          if (res.data.code != 2000) {
            failure(res.data.message);
            return;
          }
          success(res.data.data.location);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onClick(event, editor) {
      this.$emit("onClick", event, editor);
      this.$emit("sendKey", this.key);
    },
  },
};
</script>