<template>
  <div class="recommend" ref="recommend">
    <div v-if="recommends.length" class="slider-wrapper" >
      <slider>
        <div  v-for="item in recommends" :key="item.id">
        <a>
          <img :src="item.pic_info.url"/>
        </a>
        </div>
      </slider>
    </div>
  </div>
</template>
<script>
  import {getRecommend} from 'api/recommend'
  import { ERR_OK} from 'api/config'
  import Slider from 'base/slider'
  export default {
    data() {
      return {
        recommends: []
      }
    },
    components: {
      Slider
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then(res => {
          if (res.code === ERR_OK) {
            if (res.focus.data && res.focus.data.content) {
              let arr = res.focus.data.content
              this.recommends = arr
            }
          }
        })
      }
    },
    loadImage() {

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
    .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
</style>