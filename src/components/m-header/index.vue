<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">音乐APP</h1>
    <!-- <router-link to="/user" class="mine" tag="div">
      <i class="icon-mine"></i>
    </router-link> -->
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus">
  @import "~assets/stylus/variable"
  @import "~assets/stylus/mixin"

  .m-header
    position:relative
    height:44px
    text-align :center
    color :$color-theme
    font-size :0
    .icon
      display :inline-block
      vertical-align :top
      margin-top:4px
      width:30px
      height:34px
      background-size :30px 34px
      bg-image('~assets/images/logo')
      margin-right:10px
    .text
      display :inline-block
      vertical-align :top
      line-height :46px
      font-size:$font-size-large
    .mine
      position:absolute
      top:0
      right:0
      .icon-mine
        display:block
        padding:12px
        font-size:20px
        color:$color-theme
</style>

