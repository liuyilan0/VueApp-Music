
<template>
  <transition name="slide">
    <song-list :songs="songList" :singer="singer"></song-list>
  </transition>
</template>

<script>
import SongList from '../song-list'
import {getSongList} from 'api/song'
import {mapGetters} from 'vuex'
import {ERR_OK} from 'api/config'
import {createSong} from 'utils/song'

export default {
  data() {
    return {
      songList: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  components: {
    SongList
  },
  created() {
    if (!this.singer.singer_id) {
      this.$router.push('/singer')
      return 
    } 
    this._getSongList()
  },
  methods: {
    _getSongList() {
      getSongList().then(res => {
        if (res.code === ERR_OK) {
          let arr = res.singerSongList.data.songList
          arr.forEach(item => {
            let {songInfo} = item
            if (songInfo && songInfo.id) {
              this.songList.push(createSong(songInfo))
            }
          })
          console.log(this.songList)
          console.log(this.singer)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>