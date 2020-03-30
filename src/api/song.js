import {baseParams} from 'api/config'

import axios from 'axios'

export function getSongList() {
  
  const param = Object.assign({}, baseParams, {
    '-': 'getSingerSong8530111280792363',
    sign: 'zza96lerytq2h87a6ot04689d8ed731600db3f8a93c1520d873',
    g_tk: 2067839765,
    data: '{"comm":{"ct":24,"cv":0},"singerSongList":{"method":"GetSingerSongList","param":{"order":1,"singerMid":"004dr7ZS36C2B1","begin":0,"num":10},"module":"musichall.song_list_server"}}'
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