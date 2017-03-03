<template>
  <Explorer :id="'rdp_dialog_id'" title="Rdp 远程连接" :resize="false" :min="false" :max="false" :handleClose="handleClose">
  </Explorer>
</template>
<script>
  import Explorer from '../commons/Explorer.vue';
  export default {
    props: ['domain', 'host', 'port', 'user', 'password', 'width', 'height'],
    data: function () {
      return {}
    },
    created: function () {

    },
    mounted: function () {
      var rdp = require('node-rdpjs');
      const _this = this;
      var client = rdp.createClient({
        domain: _this.domain,
        userName: _this.user,
        password: _this.password,
        enablePerf: true,
        autoLogin: true,
        decompress: false,
        screen: {width: this.width, height: this.height},
        locale: 'en',
        logLevel: 'INFO'
      }).on('connect', function (e) {
      }).on('close', function (e) {
      }).on('bitmap', function (bitmap) {
      }).on('error', function (err) {
      }).connect(this.host, this.port);
    },
    methods: {},
    components: {
      Explorer
    }

  }
</script>
<style>

</style>
