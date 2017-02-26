<template>
  <div id="bottomBar" class="bottomBar" style="z-index: 12;">
    <div id="taskNextBox" class="taskNextBox" _olddisplay="" style="display: none;"><a id="taskNext" class="taskNext"
                                                                                       hidefocus="true" href="#"></a>
    </div>
    <div id="taskContainer" class="taskContainer" style="width: 476px;">
      <div id="taskContainerInner" class="taskContainerInner" style="margin-right: 0px; width: 476px;">
        <div class="taskGroup taskGroupAnaWidth" id="taskGroup_64_64">
          <div class="taskItemBox"><a class="taskItem fistTaskItem" href="#" id="taskItem_64" title="Pixlr" tid="64"
                                      appid="64_64">
            <div class="taskItemIcon"><img src="../../assets/icon/min/pixlr.png">
              <div class="taskItemIconState"></div>
            </div>
            <div class="taskItemTxt">Pixlr</div>
          </a></div>
        </div>
        <div class="taskGroup taskGroupAnaWidth" id="taskGroup_42_42">
          <div class="taskItemBox"><a class="taskItem fistTaskItem" href="#" id="taskItem_42" title="搜搜地图" tid="42"
                                      appid="42_42">
            <div class="taskItemIcon"><img src="../../assets/icon/min/sosomap.png">
              <div class="taskItemIconState"></div>
            </div>
            <div class="taskItemTxt">搜搜地图</div>
          </a></div>
        </div>
        <div class="taskGroup taskGroupAnaWidth" id="taskGroup_8992_8992">
          <div class="taskItemBox"><a class="taskItem fistTaskItem" href="#" id="taskItem_8992" title="金山快盘" tid="8992"
                                      appid="8992_8992">
            <div class="taskItemIcon"><img src="../../assets/icon/min/jinshan.png">
              <div class="taskItemIconState"></div>
            </div>
            <div class="taskItemTxt">金山快盘</div>
          </a></div>
        </div>
        <div class="taskGroup taskGroupAnaWidth taskCurrent" id="taskGroup_3402_3402">
          <div class="taskItemBox"><a class="taskItem fistTaskItem" href="#" id="taskItem_3402" title="豆瓣电台" tid="3402"
                                      appid="3402_3402">
            <div class="taskItemIcon"><img src="../../assets/icon/min/douban.png">
              <div class="taskItemIconState"></div>
            </div>
            <div class="taskItemTxt">豆瓣电台</div>
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
      ...mapGetters({})
    }
  }
</script>
<style>


</style>
