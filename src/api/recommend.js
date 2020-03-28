// import jsonp from 'utils/jsonp'
// import {baseParams,options} from 'api/config'
import recommendJson from './recommend.json'

// export function getRecommend() {
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

//   const param = Object.assign({}, baseParams, {
//     platform: 'h5',
//     uin: 0,
//     needNewCode: 1
//   })

//   return jsonp(url, param, options)
// }

export function getRecommend() {

  return new Promise((resolve, reject) => {
    if (recommendJson) {
      resolve(recommendJson)
    } else {
      reject()
    }
  })
}