<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="top"><Head></Head></el-header>
    <el-container>
      <!-- 左侧导航 -->
      <navMenu></navMenu>
      <!-- 内容部分 -->
      <el-main>
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

.el-main {
  background-color: #e9eef3;
  padding: 10px !important;
}
</style>