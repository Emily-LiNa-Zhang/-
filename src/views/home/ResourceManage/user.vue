<template>
  <div class="container">
    <!-- 左边的组织架构 -->
    <div class="organize">
      <div class="title">组织架构</div>
      <Tree></Tree>
    </div>
    <!-- 右边的按钮和表格 -->
    <div class="right">
      <Table></Table>
    </div>
  </div>
</template>

<script>
import Tree from "@/components/tree.vue";
import Table from "@/components/table.vue";
export default {
  name: "UserManage",
  components: { Tree, Table },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  background-color: #fff;
  border-radius: 5px;
  margin-top: 25px;
  margin-right: 5px;
  padding: 30px;
  overflow: hidden;
}
.organize {
  width: 350px;
  height: 582px;
  border: 1px solid rgb(215, 215, 215);
  border-radius: 5px;
  padding: 15px;
  float: left;
}
.title {
  font-size: 15px;
  margin-bottom: 20px;
}
.right {
  width: 780px;
  float: left;
  margin-left: 30px;
}
</style>