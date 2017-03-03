<template>
  <div id="clock-box" style="width: 30%; height: 60px; position: fixed; left: 0;top: -10px;"></div>
</template>
<script>
  export default {

    data: function () {
      return {}
    },
    created: function () {

    },
    mounted: function () {
      clock = $('#clock-box').FlipClock(Date.now(), {
        clockFace: 'TwentyFourHourClock'
      });
      $('#clock-box').draggable({
        containment: "#desktop"
      });
    },
    methods: {}

  }
</script>
<style>

</style>
