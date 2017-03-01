<template>
  <li :id="'app_button_' + app.id" :shortcut="app.id">
    <div class="app-box">
      <el-badge :value="app.msgCount" class="item">
        <img style="cursor: pointer;" @click="openApp" :src="app.icon"><span>{{app.title}}</span> <em v-if="false"></em>
      </el-badge>
    </div>
  </li>
</template>
<script>
  export default {
    props: ['app'],
    data: function () {
      return {
        icon: null
      }
    },
    created: function () {
    },
    methods: {
      openApp: function () {
        this.$store.dispatch('taskbar/addTask', this.app);
      }
    },
    computed: {},
    mounted: function () {
//      $('app_button_' + this.app.id).draggable();
    }

  }
</script>
<style>

</style>
