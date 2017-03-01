<template>
  <el-dialog title="控制面板" v-model="show" :modal-append-to-body="false">
    <el-tabs v-model="tabActive" type="card">
      <el-tab-pane label="常规" name="first">常规</el-tab-pane>
      <el-tab-pane label="应用" name="second">应用</el-tab-pane>
      <el-tab-pane label="用户" name="third">用户信息</el-tab-pane>
      <el-tab-pane label="权限" name="fourth">权限</el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<script>
  export default {

    data: function () {
      return {
        tabActive: null,
        show: false
      }
    },
    computed: {},
    created: function () {
    },
    mounted: function () {
      this.$store.commit('desktop/initSysSettingDialog', this)
    },
    methods: {
      showDialog: function (show) {
        this.show = show;
      }
    }
  }
</script>
<style>

</style>
