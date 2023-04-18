<template>
  <div class="userPage">
    <el-header class="route">{{ $route.meta.title }}</el-header>
    <div class="container">
      <!-- 上面的抬头 -->
      <!-- 左边的组织架构 -->
      <div class="organize">
        <div class="title">组织架构</div>
        <organizeTree></organizeTree>
      </div>
      <!-- 右边的按钮和表格 -->
      <div class="right">
        <Table></Table>
      </div>
    </div>
  </div>
</template>

<script>
import organizeTree from "@/components/tree.vue";
import Table from "@/components/table.vue";
export default {
  name: "UserManage",
  components: { organizeTree, Table },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.userPage {
  .route {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 16px;
  }
  .container {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 15px;
    padding: 20px;
    display: flex;
    .organize {
      height: 582px;
      border: 1px solid rgb(215, 215, 215);
      border-radius: 5px;
      padding: 15px;
      flex: 1 1 30%;
      .title {
        font-size: 13px;
        margin-bottom: 20px;
      }
    }
    .right {
      margin-left: 30px;
      flex: 1 1 70%;
    }
  }
}
</style>