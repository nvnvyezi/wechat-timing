const cheerio = require('cheerio')

const superagent = require('./superagent.js')
const { oneUrl } = require('../base/config')

async function getOne() {
  const todayOne = await superagent('get', oneUrl)
    .then(body => {
      try {
        const $ = cheerio.load(body)
        const todayOneList = $('#carousel-one .carousel-inner .item')
        const info = $(todayOneList[0])
          .find('.fp-one-cita')
          .text()
          .replace(/(^\s*)|(\s*$)/g, '')

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

  return todayOne
}
getOne()
module.exports = getOne
