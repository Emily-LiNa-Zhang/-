<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="top"><Head></Head></el-header>
    <el-container>
      <!-- 左侧导航 -->
      <navMenu></navMenu>
      <!-- 内容部分 -->
      <el-main>
        <!-- <el-header class="route"><BreadCrumb></BreadCrumb></el-header> -->
        <el-header class="route">{{ $route.meta.title }}</el-header>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import navMenu from "@/components/navMenu.vue";
import Head from "@/components/header.vue";
export default {
  name: "Home",
  components: { navMenu, Head },
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
.top {
  background-color: #2a4c45;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.route {
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 20px;
}
.el-aside {
  background-color: #115550;
  color: #fff;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center;
  line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>