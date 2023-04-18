<template>
  <div class="head">
    <!-- 平台logo -->
    <div class="platForm">
      <img src="../assets/logo.png" alt="演示平台" class="logo" />
      <p>云存储平台</p>
    </div>
    <!-- 用户信息 -->
    <div class="username">
      <el-avatar :size="28" :src="circleUrl"></el-avatar>
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#2a4c45"
        text-color="#FFFFFF"
        active-text-color="#FFFFFF"
      >
        <el-submenu index="1">
          <template slot="title">用户名称</template>
          <el-menu-item index="1-1" @click="changeUser1()">用户1</el-menu-item>
          <el-menu-item index="1-2" @click="changeUser2()">用户2</el-menu-item>
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
  methods: {
    changeUser1() {
      this.$alert("切换用户1？", "切换用户", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
    changeUser2() {
      this.$alert("切换用户2？", "切换用户", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },
  computed: {},
};
</script>
  
<style scoped lang="scss">
.flexHeiBgc {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #2a4c45;
}
.head {
  width: 100%;
  @extend .flexHeiBgc;
  .platForm {
    @extend .flexHeiBgc;
    p {
      color: #fff;
    }
    .logo {
      height: 35px;
      width: 35px;
      margin-right: 10px;
    }
  }
  .username {
    @extend .flexHeiBgc;
    .el-icon-arrow-down:before {
      color: #ffffff;
    }
    .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
      border: none;
    }
    ::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title {
      font-size: 13px;
    }
    // 二级菜单字体大小修改失败
    ::v-deep
      .el-menu--horizontal
      > .el-menu--popup-bottom-start
      > .el-menu-item {
      font-size: 13px !important;
    }
  }
}
</style>