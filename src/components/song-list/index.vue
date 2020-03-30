<template>
  <div class="container">
    <div class="back" @click="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title" v-html="singer.singer_name"></h1>
    <div ref="bgImage" class="bg-image" :style="bgStyle">
      <div class="play-wrapper" >
        <div class="play" v-show="songs.length>0" ref="playBtn" @click="random">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="layer"></div>
    <scroll :data="songs" class="song-list" ref="list">
      <div class="song-list-wrapper">
        <ul>
          <li v-for="(item, index) in songs" :key='index' class="song-item">
            <div class="title" v-text="item.title"></div>
            <div class="title" v-text="item.album"></div>
          </li>
        </ul>
      </div>
      <div class="loading-container" v-show="!songs.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'base/scroll'
import Loading from 'base/loading'
export default {
  props: {
    songs: {
      type: Array,
      default: () => []
    },
    singer: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Scroll,
    Loading
  },
  computed: {
    bgStyle() {
      return `background-image:url(${this.singer.singer_pic})`
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    random() {

    }
  }
}
</script>

<style lang="stylus">
  @import '~assets/stylus/variable'
  @import '~assets/stylus/mixin'
  .container
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    .back
      position absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .title
      position: absolute
      top: 0
      left: 10%
      z-index: 40
      width: 80%
      no-wrap()
      text-align: center
      line-height: 40px
      font-size: $font-size-large
      color: $color-text
    .bg-image
      position relative
      width 100%
      height 0
      padding-top 70%
      transform-origin top
      backgrond-size cover
      .play-wrapper
        position: absolute
        bottom: 20px
        z-index: 50
        width: 100%
        .play
          box-sizing: border-box
          width: 135px
          padding: 7px 0
          margin: 0 auto
          text-align: center
          border: 1px solid $color-theme
          color: $color-theme
          border-radius: 100px
          font-size: 0
          .icon-play
            display: inline-block
            vertical-align: middle
            margin-right: 6px
            font-size: $font-size-medium-x
          .text
            display: inline-block
            vertical-align: middle
            font-size: $font-size-small
      .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.4)
    .bg-layer
      position: relative
      height: 100%
      background: $color-background
    .song-list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      background: $color-background
      .song-list-wrapper
        padding: 20px 30px
        .song-item
          display: flex
          align-items: center
          box-sizing: border-box
          height: 64px
          font-size: $font-size-medium
          .title
            color: $color-theme
            font-size: $font-size-large
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>