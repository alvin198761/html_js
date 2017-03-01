<template>
  <div class="notes">
    <div class="infotitl">{{note.title}}</div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    props: ['note'],
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({})
    },
    mounted: function () {
      let _this = this;
      $(".notes").draggable({
        containment: "#desktop", start: function () {
          var zindex = _this.$store.state.notes.zIndex;
          $("#inform").css({"z-index": zindex + 1});
          _this.$store.commit('note/zIndex');
        }
      });

      $(".notes").click(function () {
        var zindex = $("#mome").css("z-index");
        var z = parseInt(zindex) + 1;
        $("#inform").css({"z-index": z});
      });
    }
  }
</script>
<style>

  .notes {
    width: 161px;
    height: 164px;;
    position: absolute;
    z-index: 81;
    top: 20px;
    right: 50px;
    background-image: url(../../assets/images/memo_background.png);
  }

  .infotitl {
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
  }
</style>
