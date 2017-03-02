<template>
  <div class="notes" :id="'note_'+note.id">
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
      $("#note_" + this.note.id).draggable({containment: "#desktop"});

      $("#note_" + this.note.id).click(function () {
        var zIndex = _this.$store.state.notes.zIndex;
        $("#note_" + _this.note.id).css({"z-index": zIndex + 1});
        _this.$store.commit('note/zIndex');
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
