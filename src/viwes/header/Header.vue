<template>
    <el-link :underline="false"><i class="el-icon-s-fold"></i></el-link>
</template>

<script>
export default {
    name: "header",
}
</script>

<style scoped>
    .el-link{
        margin-top: 10px;
    }
    .el-icon-s-fold,.el-icon-s-unfold{
        font-size: 1.5rem;
    }
</style>