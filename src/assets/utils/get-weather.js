const cheerio = require('cheerio')

const superagent = require('./superagent.js')
const { weatherUrl } = require('../base/config')

async function getWeather() {
  const todayInfo = await superagent('get', weatherUrl)
    .then(body => {
      try {
        const $ = cheerio.load(body)
        const city = $('.search_default em').text()
        const weatherTips = $('.wea_tips em').text()
        const humidity = $('.wea_about span').text()
        const wind = $('.wea_about em').text()
        const atmosphere = $('.wea_alert em').text()
        const date = new Date().toLocaleString()
        const today = $('.forecast .days')
          .first()
          .find('li')

        const info = `${date}<br>${weatherTips}<br>城市: ${city}<br>${$(today[0])
          .text()
          .trim()}天气: ${$(today[1])
          .text()
          .trim()} <br>温度: ${$(today[2])
          .text()
          .trim()} <br>湿度: ${humidity} <br>空气: ${atmosphere} <br>${wind} <br>`

        return info
      } catch (error) {
        return { err: true }
      }
    })
    ['catch'](err => {
      return {
        err: true,
        err
      }
    })

  return todayInfo
}

module.exports = getWeather
