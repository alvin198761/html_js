<template>
  <li :shortcut="app.id">
    <img style="cursor: pointer;" @click="openApp" :src="app.icon"><span>{{app.title}}</span> <em v-if="false"></em>
  </li>
</template>
<script>
  export default {
    props: ['app'],
    data: function () {
      return {}
    },
    created: function () {
      this.app.icon = require('../../assets/icon/' + this.app.icon);
    },
    methods: {
      openApp: function () {
        this.$store.dispatch('taskbar/addTask', this.app);
      }
    },
    computed: {}

  }
</script>
<style>

</style>
