<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="../src/assets/images/logo@2x.png"> -->
    <m-header />
    <nav-tab  />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
