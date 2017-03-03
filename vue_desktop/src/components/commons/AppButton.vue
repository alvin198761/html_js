<template>
  <li :id="'app_button_' + app.id" :shortcut="app.id">
    <div class="app-box">
      <el-badge :value="app.msgCount" class="item">
        <img style="cursor: pointer;" @click="openApp(app)" :src="app.icon"><span>{{app.title}}</span> <em
        v-if="false"></em>
      </el-badge>
    </div>
  </li>
</template>
<script>
  export default {
    props: ['app', 'openApp'],
    data: function () {
      return {
        icon: null
      }
    },
    created: function () {
    },
    computed: {},
    mounted: function () {
    }
  }
</script>
<style>

</style>
