<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" >
          <slider>
            <div  v-for="item in recommends" :key="item.id">
              <a :href="item.jump_info.url">
                <img :src="item.pic_info.url"/>
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <div class="recommend-title">精选歌单列表</div>
          <div class="recommend-item" v-for="item in songList" :key="item.tid">
            <div class="avatar">
              <img v-lazy="item.cover_url_small" width=60 height=60>
            </div>
            <div class="content">
              <div class="name" v-html="item.creator_info.nick"></div>
              <div class="desc">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="loading-view" v-show="!songList.length">
        <loading />
      </div>
    </scroll>
  </div>
</template>
<script>
  import {getRecommendList} from 'api/recommend'
  import { ERR_OK} from 'api/config'
  import Slider from 'base/slider'
  import Scroll from 'base/scroll'
  import Loading from 'base/loading'
  export default {
    data() {
      return {
        recommends: [],
        songList:[]
      }
    },
    components: {
      Slider,
      Scroll,
      Loading
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommendList().then(res => {
          if (res.code === ERR_OK) {
            this.songList = res.playlist.data.v_playlist
            this.recommends = res.focus.data.content
          }
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variable'

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .recommend-title
          height: 60px
          line-height: 60px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .recommend-item
          display: flex
          align-items: center
          padding: 0 20px 20px 20px
          .avatar
            flex: 0 0 60px
            padding-right 20px
          .content
            display flex
            flex-direction column
            justify-content center
            font-size $font-size-medium
            line-height 20px
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-view
        position absolute 
        width 100%
        top 50%
        transform translateY(-50%)
</style>