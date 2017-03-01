<template>
  <div id="desktop">
    <div>
      <RootPanel></RootPanel>
    </div>

    <div class='bottomBarBg'>
      <div class="bottomBarBgTask"></div>
    </div>
    <div class='bottomBarBgTask'></div>
    <TaskBar></TaskBar>

    <div layout="tools">
      <Notes v-for="note in notes" :note="note"></Notes>
      <Browser v-for="t in tasks" :task="t"></Browser>
    </div>

    <div layout="setting">
      <InputMethod v-if="showInput"></InputMethod>
      <SysSettingDialog ref="sysSettingDialog"></SysSettingDialog>
    </div>
  </div>
</template>
<script>
  import TaskBar from './TaskBar.vue';
  import RootPanel from './RootPanel.vue';
  import Notes from './Notes.vue'
  import {mapGetters} from 'vuex';
  import Browser from './Browser.vue';
  import InputMethod from '../setting/InputMethod.vue';
  import SysSettingDialog from '../setting/SysSettingDialog.vue';
  export default{
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({
        tasks: 'taskbar/_tasks',
        notes: 'note/_notes',
        showInput: 'desktop/inputMethod'
      })
    },
    components: {
      TaskBar, RootPanel, Notes, Browser, InputMethod, SysSettingDialog
    },
    mounted: function () {
      this.$store.dispatch("desktop/init");
    },
    created: function () {
      this.$store.dispatch('desktop/initChildren')
    }
  }
</script>
<style>
  #desktop {
    display: block;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -100;
    background: url("../../assets/bg-1.jpg") repeat right bottom transparent;

    background-size: 100%;
    overflow: hidden;
  }

</style>
