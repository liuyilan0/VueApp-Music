export default class Song {
  constructor({id, name, mid, title, interval, singer, album, image, url}) {
    this.id = id
    this.name = name
    this.mid = mid
    this.title = title
    this.interval = interval
    this.singer = singer
    this.album = album
    this.image = image
    this.url = url
  }
}

export function createSong(song) {
  return new Song({
    id: song.id,
    name: song.name,
    mid: song.mid,
    title: song.title,
    interval: song.interval,
    singer: filterSinger(song.singer),
    album: song.album.name,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${song.album.mid}.jpg?max_age=2592000`,
    url: `http://ws.stream.qqmusic.qq.com/${song.id}.m4a?fromtag=46`
  })
}

function filterSinger(singer) {
  if (!singer) {
    return ''
  }
  let arr = []
  singer.forEach(s => {
    arr.push(s.name)
  })
  return arr.join('/')
}