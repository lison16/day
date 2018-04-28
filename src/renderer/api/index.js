import axios from 'axios'
// 获取天气数据
export const getWeather = (poi) => {
  return new Promise((resolve, reject) => {
    axios({
      url: 'https://free-api.heweather.com/s6/weather/forecast?parameters',
      method: 'get',
      params: {
        location: `${poi[0]},${poi[1]}`,
        key: '93a6f3c4664a42f9a6ef12c0e1cc75c6'
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const getNonli = (date) => {
  return new Promise((resolve, reject) => {
    axios({
      url: 'http://54.222.232.96:3888/proxy/server/5ae4376422b5146633e2d679/calendar/day',
      method: 'get',
      params: {
        key: 'f9b1041d5f94d19eb7eeedf2b49305aa',
        date
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
