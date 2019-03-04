const request = require('../assets/utils/superagent')

// 微信机器人/自动回复
async function replay(bot, name, text) {
  const contact = await bot.Contact.find({ name })

  const url = `http://apis.haoservice.com/efficient/robot?key=78490c1c10aa43b6829c3abbd9c3a5b4`

  request('get', url, {
    info: encodeURIComponent(text),
    address: ''
  })
    .then(body => {
      contact.say(JSON.parse(body).result.text)
    })
    ['catch'](err => {
      console.log(err)
      contact.say('你是最棒的')
    })
}

module.exports = replay
