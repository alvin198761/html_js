<template>
  <div>this is a vue page</div>
</template>
<script>
  export default {

    data: function () {
      return {}
    },
    created: function () {

    },
    methods: {},
    mounted: function () {
      var tty = require('tty.js');
      var app = tty.createServer({
        shell: 'bash',
        users: {
          foo: 'bar'
        },
        port: 22
      });
      app.get('/foo', function (req, res, next) {
        res.send('bar');
      });
      app.listen();
    }

  }
</script>
<style>

</style>
