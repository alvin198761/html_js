<template>
  <div id="rootPanel">
    <FloatMenu></FloatMenu>
    <ContentPanel></ContentPanel>
    <Sidebar></Sidebar>
  </div>
</template>
<script>
  import Sidebar from './Sidebar.vue';
  import {mapGetters} from 'vuex';
  import FloatMenu from './FishEyeMenu.vue';
  import ContentPanel from './ContentPanel.vue';
  export default{
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({})
    },
    components: {
      Sidebar, FloatMenu, ContentPanel
    }
  }
</script>
<style>


</style>
