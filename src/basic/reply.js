// 微信机器人/自动回复
const request = require('request')

async function replay(bot, name, text) {
  const contact = await bot.Contact.find({ name })

  const url = `http://apis.haoservice.com/efficient/robot?info=${encodeURIComponent(text)}&address=&key=78490c1c10aa43b6829c3abbd9c3a5b4`

  request(url, (err, res, body) => {
    if (!err && 200 === res.statusCode) {
      try {
        contact.say(JSON.parse(body).result.text)
      } catch (error) {
        contact.say('你是最棒的')
      }
    } else {
      console.log(err)
    }
  })
}

module.exports = replay
