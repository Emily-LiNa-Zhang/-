<template>
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
        <div class="button" @click="isC">
          <!-- 点击展开收起导航和切换对应图标 -->
          <i class="el-icon-s-fold" v-show="block"></i>
          <i class="el-icon-s-unfold" v-show="toggle"></i>
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
</template>
  
  <script>
export default {
  name: "navMenu",
  data() {
    return {
      isCollapse: false, //导航栏默认为展开
      toggle: false, //第二个图标默认隐藏
      block: true, //默认显示第一个图标
    };
  },
  methods: {
    // 动态控制展开与收起和切换对应图标
    isC() {
      this.isCollapse = !this.isCollapse;
      this.toggle = !this.toggle;
      this.block = !this.block;
    },
  },
};
</script>
  
<style>
.button {
  background-color: #25aea6;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 13px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-submenu__title:hover {
  /* hover色值：104842 */
  background-color: #104842 !important;
}
.el-menu-item:hover {
  background-color: #104842 !important;
}
.el-menu-item.is-active {
  /* active色值：0F352D */
  background-color: #0f352d !important;
}
.el-submenu__title.is-active {
  background-color: #0f352d !important;
}
.el-submenu_icon-arrow .el-icon-arrow-down {
  /* 箭头颜色：#88aaa7 */
  color: red;
}
</style>