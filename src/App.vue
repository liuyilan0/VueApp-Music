<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="../src/assets/images/logo@2x.png"> -->
    <m-header />
    <nav-tab  />
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header'
import NavTab from 'components/nav-tab'
export default {
  name: 'App',
  components: {
    MHeader,
    NavTab
  },
  created() {
   
  }
}
</script>

<style lang="stylus">

</style>
