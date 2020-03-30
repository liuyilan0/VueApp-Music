// import jsonp from 'utils/jsonp'
import {baseParams} from 'api/config'

import axios from 'axios'

// export function getRecommend() {
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

//   const param = Object.assign({}, baseParams, {
//     platform: 'h5',
//     uin: 0,
//     needNewCode: 1
//   })
//   return jsonp(url, param, options)
// }


export function getRecommendList() {
  
  const param = Object.assign({}, baseParams, {
    '-': 'recom5603502352969265',
    needNewCode: 0,
    platform: 'yqq.json',
    data: '{"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":5}},"new_album":{"module":"newalbum.NewAlbumServer","method":"get_new_album_info","param":{"area":1,"sin":0,"num":10}},"new_album_tag":{"module":"newalbum.NewAlbumServer","method":"get_new_album_area","param":{}},"toplist":{"module":"musicToplist.ToplistInfoServer","method":"GetAll","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}'
  })

  return new Promise((resolve, reject) => {
    axios.get('/api/getMusicInfo', {
      params: param
    }).then((res) => {
      resolve(res.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    }) 
  })
}