<template>
  <div class="navManue">
    <el-aside width="collapse">
      <el-menu
        default-active="1"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        router
        background-color="#115550"
        text-color="#FFFFFF"
        active-text-color="#FFFFFF"
      >
        <el-menu-item>
          <!-- 点击展开收起导航和切换对应图标 -->
          <div class="collaBtn" @click="clickOpen">
            <i class="el-icon-sort"></i>
          </div>
        </el-menu-item>
        <el-submenu index="/resource">
          <template slot="title">
            <i class="el-icon-s-shop"></i>
            <span>资源管理</span>
          </template>
          <el-menu-item index="/resource/user">用户管理</el-menu-item>
          <el-menu-item index="/resource/tool">工具管理</el-menu-item>
        </el-submenu>
        <el-submenu index="/train">
          <template slot="title">
            <i class="el-icon-set-up"></i>
            <span>实训管理</span>
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="/trainplan">
          <template slot="title">
            <i class="el-icon-notebook-2"></i>
            <span>训练计划管理</span>
          </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="/integrate">
          <template slot="title">
            <i class="el-icon-bangzhu"></i>
            <span>综合管理</span>
          </template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="/system">
          <template slot="title">
            <i class="el-icon-aim"></i>
            <span>体系管理</span>
          </template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>
  
<script>
export default {
  name: "navMenu",
  data() {
    return {
      isCollapse: false, //导航栏默认为展开
    };
  },
  methods: {
    // 动态控制展开与收起和切换对应图标
    clickOpen() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
  
<style scoped lang="scss">
$fontColor: #ffffff;
$fontSize: 13px;
.navManue {
  .el-aside {
    height: 100%;
    background-color: #115550;
    color: $fontColor;
    text-align: left;
    .el-menu {
      border: none;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 180px;
      min-height: 400px;
    }
    .el-submenu__title:hover {
      background-color: #104842 !important;
    }
    .el-menu-item:hover {
      background-color: #104842 !important;
    }
    .el-menu-item.is-active {
      background-color: #0f352d !important;
    }
    .el-submenu__title.is-active {
      background-color: #0f352d !important;
    }
    .el-submenu__title {
      i {
        color: $fontColor;
        font-size: $fontSize;
      }
      .el-submenu__icon-arrow {
        color: #88aaa7;
        font-size: $fontSize;
      }
      span {
        font-size: $fontSize;
      }
    }
    .el-menu .el-menu--inline > .el-menu-item {
      font-size: $fontSize;
    }

    .collaBtn {
      background-color: #25aea6;
      width: 35px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 17px;
      top: 15px;
      border-radius: 5px;
      .el-icon-sort {
        transform: rotate(90deg);
        color: $fontColor;
      }
    }
  }
}
</style>