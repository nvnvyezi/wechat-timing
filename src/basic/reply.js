const request = require('../assets/utils/superagent')

const { robotUrl } = require('../assets/base/config')

// 微信机器人/自动回复
async function replay(bot, name, text) {
  const contact = await bot.Contact.find({ name })

  // request('get', url, {
  //   info: encodeURIComponent(text),
  //   address: ''
  // })
  //   .then(body => {
  //     contact.say(JSON.parse(body).result.text)
  //   })
  //   ['catch'](err => {
  //     console.log(err)
  //     contact.say('你是最棒的')
  //   })
  const url = `${robotUrl}&data=${encodeURIComponent(
    `{"sessionId":"d5843d6fbeb9433188f0962715e18e7f","robotId":"webbot","userId":"ecfed4d2646d4deab3ce7d343f86251b","body":{"content":"${text}"},"type":"txt"}`
  )}&ts=${new Date().getTime()}`

  request('get', url)
    .then(async body => {
      const data = body.match(/content":"(\S*)\\r\\n"/)

      if (data) {
        await contact.say(data[1])
      } else {
        return Promise.reject()
      }
    })
    ['catch'](err => {
      console.log(err)
      contact.say('你是最棒的')
    })
}

module.exports = replay
