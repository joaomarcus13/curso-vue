<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <modal-factory></modal-factory>
  <router-view></router-view>
</template>

<script>
  import ModalFactory from './components/ModalFactory'
  export default 
  {
    components: {ModalFactory}
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
