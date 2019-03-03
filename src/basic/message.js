const chalk = require('chalk')

const { getTime } = require('../assets/utils/get-Time')

const reply = require('./reply')

function getName(bot) {
  return bot.userSelf().name()
}

module.exports = {
  onMessage: (bot, msg) => {
    const selfName = getName(bot)
    // 获取消息发送的联系人。在微信群中，Message.to() 会返回null，使用Message.room()获取微信群信息。
    const toName = msg.to()
    // 获取消息的文本内容
    const text = msg.text()
    // 消息发送的时间
    const date = msg.date()
    // 获取发送消息的联系人
    const fromName = msg.from()

    console.log(`${chalk.blue(getTime(date))}: 来自${chalk.red(fromName.name())}发送给${chalk.green(toName.name())}的消息: ${chalk.whiteBright(text)}`)
    if (selfName !== fromName.name()) {
      reply(bot, fromName.name(), text)
    }
  }
}
