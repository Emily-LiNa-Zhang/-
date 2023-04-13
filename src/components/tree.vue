<template>
  <div class="treeBox">
    <div class="search">
      <el-input
        placeholder="搜索名称"
        v-model="filterText"
        suffix-icon="el-icon-search"
      >
      </el-input>
    </div>

    <div class="question_info_lists">
      <el-tree
        ref="tree"
        :key="tree_key"
        :data="treeData"
        node-key="index"
        :render-content="renderContent"
        :expand-on-click-node="false"
        :default-expanded-keys="defaultExpand"
        show-checkbox
        :filter-node-method="filterNode"
      ></el-tree>
    </div>
  </div>
</template>
   
 <script>
export default {
  name: "tree1",
  data() {
    return {
      filterText: "",
      treeData: [
        {
          id: 1,
          label: "一级 1",
          isEdit: false,
          children: [
            {
              id: 4,
              label: "二级 1-1",
              isEdit: false,
              children: [
                { id: 9, label: "三级 1-1-1", isEdit: false, children: [] },
                {
                  id: 10,
                  label: "三级 1-1-2",
                  isEdit: false,
                  children: [],
                },
                {
                  id: 11,
                  label: "三级 1-1-3",
                  isEdit: false,
                  children: [],
                },
              ],
            },

            {
              id: 12,
              label: "二级 1-2",
              isEdit: false,
              children: [],
            },

            {
              id: 13,
              label: "二级 1-3",
              isEdit: false,
              children: [],
            },
          ],
        },

        {
          id: 2,
          label: "一级 2",
          isEdit: false,
          children: [
            { id: 5, label: "二级 2-1", isEdit: false, children: [] },
            {
              id: 6,
              label: "二级 2-2",
              isEdit: false,
              children: [],
            },
          ],
        },

        {
          id: 3,
          label: "一级 3",
          isEdit: false,
          children: [
            { id: 7, label: "二级 3-1", isEdit: false, children: [] },
            {
              id: 8,
              label: "二级 3-2",
              isEdit: false,
              children: [],
            },
          ],
        },
      ],
      tree_key: 0,
      defaultExpand: [],
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },

    //   增加
    append(store, node, data) {
      var maxid = "20";
      //新增数据
      const nodeapp = {
        id: ++maxid,
        label: "增加节点",
        isEdit: false,
        children: [],
      };
      data.children.push(nodeapp);
      if (!node.expanded) {
        node.expanded = true;
      }
    },

    // 修改
    nodeEdit(ev, store, data) {
      data.isEdit = true;
      this.$nextTick(() => {
        const $input =
          ev.target.parentNode.parentNode.querySelector("input") ||
          ev.target.parentElement.parentElement.querySelector("input");

        !$input ? "" : $input.focus();
      });
    },

    // 修改确认
    edit_sure(ev, data) {
      const $input =
        ev.target.parentNode.parentNode.querySelector("input") ||
        ev.target.parentElement.parentElement.querySelector("input");
      if (!$input) {
        return false;
      } else {
        data.label = $input.value;
        data.isEdit = false;
      }
    },

    // 节点删除
    nodeDelete(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },

    // 显示编辑框
    showOrEdit(data) {
      if (data.isEdit) {
        return (
          <input
            type="text"
            value={data.label}
            on-blur={(ev) => this.edit_sure(ev, data)}
          />
        );
      } else {
        return <span className="node_labe">{data.label}</span>;
      }
    },

    // 结构树操作group node,
    renderContent(h, { node, data, store }) {
      return (
        <span>
          <span class="el-icon-document">{this.showOrEdit(data)}</span>
          <div class="tree_node_op" style=" float: right">
            <i
              class="el-icon-edit"
              on-click={(ev) => this.nodeEdit(ev, store, data)}
            ></i>
            <i
              class="el-icon-remove-outline"
              on-click={() => this.nodeDelete(node, data)}
            ></i>
            <i
              class="el-icon-circle-plus-outline"
              on-click={() => this.append(store, node, data)}
            ></i>
          </div>
        </span>
      );
    },
  },
};
</script> 
<style scoped>
.search {
  margin-bottom: 20px;
}
.question_info_lists {
  height: 480px;
  overflow: auto;
}
.question_info_lists::-webkit-scrollbar {
  width: 10px;
}
.question_info_lists::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 5px;
}

.el-tree-node__content {
  height: 30px;
}
/* 树形控件前面的箭头大小 */
.el-tree /deep/ .el-icon-caret-right:before {
  font-size: 18px;
}
</style>