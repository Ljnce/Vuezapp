<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name:"app",
  // data() {
  //   return {
  //     messages: null
  //   }
  // },
  // mounted () {
  //   this.axios.get('http://127.0.0.1:8000/api/players', {
  //     headers: {
  //       'Authorization' : 'Bearer'+ 'Pippo89',
  //       'Content-Type' : 'application/json',
  //     }
  //   })
  //   .then(response => {
  //     this.messages = response.data
  //     console.log(response.data);
  //   })
  // }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
