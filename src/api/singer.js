import {baseParams} from 'api/config'

import axios from 'axios'

export function getSingerList() {
  
  const param = Object.assign({}, baseParams, {
    '-': 'getUCGI8140629482507289',
    sign: 'zzam82vc8hr0aosdp2f3fef04bda3a286eeb40136f6b80f4a',
    g_tk: 2067839765,
    data: '{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}'
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