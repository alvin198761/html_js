<template>
  <div class="appButton">
    <div class="appButton_appIcon">
      <img src="../assets/icon/readGod.png" class="appButton_appIconImg"/>
    </div>
    <div class="appButton_appName">
      <div class="appButton_appName_text">应用程序</div>
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
  .appButton {
    color: white;
    cursor: pointer;
    display: inline;
    float: left;
    font-size: 12px;
    height: 88px;
    position: relative;
    width: 88px;
  }

  .appButton_appIcon {
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
    height: 48px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 48px;
  }

  .appButton_appIconImg {
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .appButton_appName {
    color: white;
    cursor: pointer;
    height: 20px;
    margin: 8px 0 0 0;
    overflow: hidden;
    text-align: center;
  }

  .appButton_appName_text{
    width: auto;
    background: gray;
    border-radius: 8px;
    margin-right: 5px;
    height: 20px;
    line-height: 20px;

  }

</style>
