<template>
  <div class="singer" ref="singer">
    <list-view @select="selectSinger" :dataList='singerList'></list-view>
    <router-view></router-view>
  </div>
</template>
<script>
  import {getSingerList} from 'api/singer'
  import { ERR_OK } from 'api/config'
  import ListView from 'base/listview'
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        singerList: []
      }
    },
    components: {
      ListView
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then(res => {
          if (res.code === ERR_OK) {
            this.singerList = res.singerList.data.singerlist
          }
        })
      },
      selectSinger(singer) {
        this.$router.push({
          path: `/singer/${singer.singer_id}`
        })
        this.setSinger(singer)
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      })
    },
  }
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variable'
  @import '~assets/stylus/mixin'
  .singer
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    
</style>