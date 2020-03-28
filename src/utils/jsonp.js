import jsonpUtil from 'jsonp'

export default function jsonp(url, data, option) {
  return new Promise((resolve, reject) => {
    url += url.indexOf('?') ? '&' : '?' + handleParam(data)
    jsonpUtil(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function handleParam(data) {
  let url = ''
  for (const key in data) {
    if (data[key] != undefined) {
      url += `&${key}=encodeURIComponent(data[key]`
    }
  }
  return url ? url.substring(1) : ''
}