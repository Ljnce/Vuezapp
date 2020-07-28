<template>
  <div id="user">
    <div class="container-green"></div>
    <div class="container-grey"></div>
    <div class="enter">
        <router-link :to="{ name: 'Vuezapp', params: {} }"><img alt="Vue logo" src="../assets/logo.png" /></router-link>
        <h1 style="color: #41b883 ">Zapp</h1>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">

  #user {
    .container-green {
      height: 100px;
      width: 100vw;
      background-color: #00e6ac;
      position: relative;
    }
    .container-grey {
      height: calc(100% - 100px);
      width: 100vw;
      background-color: #e6e6e6;
      position: relative;
    }
    .enter {
      height: 90%;
      width: 85%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #990000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        height: 150px;
        &:hover {
          cursor: pointer;
          transform: scale(1.2);
        }
      }
    }
  }

</style>
