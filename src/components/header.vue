<template>
  <div class="head">
    <!-- 平台logo -->
    <div class="info">
      <img src="../assets/logo.png" alt="演示平台" class="logo" />
      <p>云存储平台</p>
    </div>
    <!-- 用户信息 -->
    <div class="username">
      <el-avatar :size="30" :src="circleUrl"></el-avatar>
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#2a4c45"
        text-color="#fff"
      >
        <el-submenu index="1">
          <template slot="title">用户名称</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {},
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {},
  computed: {},
};
</script>
  
<style>
* {
  margin: 0;
  padding: 0;
}
.head,
.info,
.username {
  height: 60px;
  background-color: #2a4c45;
}
.head {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.info,
.username {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
p {
  color: #fff;
}
li {
  color: #fff;
}
.logo {
  height: 35px;
  width: 35px;
  margin-right: 10px;
}
</style>