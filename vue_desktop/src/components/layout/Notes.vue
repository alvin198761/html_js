<template>
  <div class="notes">
    <div class="infotitl">便签</div>
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
    },
    mounted: function () {
      $(".notes").draggable({
        containment: "#desktop", start: function () {
          var zindex = $("#mome").css("z-index");
          var z = parseInt(zindex) + 1;
          $("#inform").css({"z-index": z});
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


</style>
