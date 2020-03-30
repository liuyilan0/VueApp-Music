<template>
  <scroll :data="dataList" class='scroll-view'>
    <ul class="singer-list">
      <li @click="selectItem(item)" v-for="item in dataList" :key="item.singer_id" class="singer-item">
        <img  class="avatar" v-lazy="`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.singer_mid}.jpg?max_age=2592000`">
        <div class="title" v-html="item.singer_name"></div>
      </li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from 'base/scroll'
export default {
  props: {
    dataList: {
      type: Array
    }
  },
  components: {
    Scroll
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item)
    }
  },
}
</script>

<style scoped lang='stylus'>
.scroll-view
  width 100%
  height 100%
  overflow hidden
  .singer-list
    .singer-item
      padding: 10px 20px 10px 30px
      display flex
      align-items center
      .avatar
        width 50px
        height 50px
        border-radius 50%
      .title
        margin-left: 20px
        color: $color-text-l
        font-size: $font-size-medium
</style>