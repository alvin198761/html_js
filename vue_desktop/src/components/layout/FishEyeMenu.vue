<template>
  <div class="dock" id="dock">
    <div class="dock-container">
      <a class="dock-item" href="http://www.sucaihuo.com"><img src="../../assets/images/home.png" alt="home" /><span>Home</span></a>
       <a class="dock-item" href="http://www.sucaihuo.com"><img src="../../assets/images/email.png" alt="contact" /><span>Contact</span></a>
       <a class="dock-item" href="http://www.sucaihuo.com"><img src="../../assets/images/portfolio.png" alt="portfolio" /><span>Portfolio</span></a>
      <a class="dock-item" href="http://www.sucaihuo.com"><img src="../../assets/images/music.png" alt="music" /><span>Music</span></a>
       <a class="dock-item" href="http://www.sucaihuo.com"><img src="../../assets/images/video.png" alt="video" /><span>Video</span></a>
      <a class="dock-item" href="http://www.sucaihuo.com"><img src="../../assets/images/history.png" alt="history" /><span>History</span></a>
       <a class="dock-item" href="http://www.sucaihuo.com"><img src="../../assets/images/calendar.png" alt="calendar" /><span>Calendar</span></a>
       <a class="dock-item" href="http://www.sucaihuo.com"><img src="../../assets/images/rss.png" alt="rss" /><span>RSS</span></a>
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
        items: 'gui/floatMenus'
      })
    },
    components: {}
  }
</script>
<style>

</style>
