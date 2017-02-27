<template>
  <div id="bottomBar" class="bottomBar" style="z-index: 12;">
    <div id="taskNextBox" class="taskNextBox" _olddisplay="" style="display: none;"><a id="taskNext" class="taskNext"
                                                                                       hidefocus="true" href="#"></a>
    </div>
    <div id="taskContainer" class="taskContainer" style="width: 476px;">
      <div id="taskContainerInner" class="taskContainerInner" style="margin-right: 0px; width: 476px;">
        <div v-for="task in tasks" class="taskGroup taskGroupAnaWidth"
             :class="task.id === currentBrowserId ? 'taskCurrent':''" :id="'taskGroup_'+task.id">
          <div class="taskItemBox"><a class="taskItem fistTaskItem" href="#" :id="'taskItem_'+task.id" :title="task.id"
                                      :tid="task.id" :appid="task.id+'_'+task.id">
            <div class="taskItemIcon"><img :src="task.icon"/>
              <div class="taskItemIconState"></div>
            </div>
            <div class="taskItemTxt">{{task.title}}</div>
          </a></div>
        </div>
      </div>
    </div>
    <div id="taskPreBox" class="taskPreBox" _olddisplay="" style="display: none;"><a id="taskPre" class="taskPre"
                                                                                     hidefocus="true" href="#"></a>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({
        tasks: 'taskbar/_tasks',
        currentBrowserId: 'browser/currentBrowserId'
      })
    },
    mounted: function () {
      this.$store.commit('taskbar/initComponent')
    }
  }
</script>
<style>


</style>
