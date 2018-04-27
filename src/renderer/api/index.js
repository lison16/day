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
