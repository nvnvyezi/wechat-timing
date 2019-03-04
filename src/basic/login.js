const chalk = require('chalk')
const schedule = require('node-schedule')

const { hour, minute, second, toName } = require('../assets/base/config')
const getWeather = require('../assets/utils/get-weather.js')
const getOne = require('../assets/utils/get-one.js')

module.exports = {
  onLogin: async (bot, user) => {
    console.log(chalk.green(`欢迎${user.domain}登陆`))
    const contact = await bot.Contact.find({ name: toName })
    const rule = new schedule.RecurrenceRule()

    rule.dayOfWeek = [0, new schedule.Range(1, 6)]
    rule.hour = hour
    rule.minute = minute
    rule.second = second

    schedule.scheduleJob(rule, async () => {
      const todayInfo = await getWeather()
      const todayOne = await getOne()

      console.log('你的贴心小助理开始工作啦！')
      if (!todayInfo || todayInfo.err || !todayOne || todayOne.err) {
        contact.say('请联系你的小宝贝修复你的小助理')
      } else {
        contact.say(`${todayInfo}<br>每日一句: ${todayOne}<br><br>来自最爱你的我！！！`)
      }
    })
  }
}
