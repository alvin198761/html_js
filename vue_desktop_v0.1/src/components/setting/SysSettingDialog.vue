<template>
  <Explorer :id="'controlPane_id'" title="控制面板" :resize="false" :max="false" :handleClose="handleClose">
    <div slot="content">
      <el-tabs v-model="tabActive" type="card">
        <el-tab-pane label="常规" name="first">常规</el-tab-pane>
        <el-tab-pane label="应用" name="second">应用</el-tab-pane>
        <el-tab-pane label="用户" name="third">用户信息</el-tab-pane>
        <el-tab-pane label="权限" name="fourth">权限</el-tab-pane>
      </el-tabs>
    </div>
  </Explorer>
</template>
<script>

  import Explorer from '../layout/Explorer.vue';

  export default {

    data: function () {
      return {
        tabActive: null,
      }
    },
    computed: {},
    created: function () {
    },
    mounted: function () {
    },
    methods: {
      handleClose: function (e) {
        this.$store.commit('desktop/showSysSettingDialog', false)
      }
    },
    components: {
      Explorer
    }
  }
</script>
<style>

</style>
