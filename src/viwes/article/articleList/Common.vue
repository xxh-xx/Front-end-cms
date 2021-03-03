<template>
  <div class="common">
    <top v-on:sendFormData="formData = $event" v-on="$listeners" :activeArticle="localData.active"></top>
    <bottom :formData="formData" :localData="localData"></bottom>
  </div>
</template>

<script>
import Top from "@/viwes/article/articleList/Top";
import Bottom from "@/viwes/article/articleList/Bottom";
export default {
  name: "Common",
  components: {
    Top,
    Bottom,
  },
  props: {
    localData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
    return {
      formData: {}
    }
  }
};
</script>