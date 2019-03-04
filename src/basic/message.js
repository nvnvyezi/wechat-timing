const chalk = require('chalk')

const { getTime } = require('../assets/utils/get-Time')

const reply = require('./reply')

function getName(bot) {
  return bot.userSelf().name()
}

module.exports = {
  onMessage: async (bot, msg) => {
    const selfName = getName(bot)
    // 获取消息发送的联系人。在微信群中，Message.to() 会返回null，使用Message.room()获取微信群信息。
    const toName = msg.to()
    const room = msg.room()
    // 获取消息的文本内容
    const text = msg.text()
    // 消息发送的时间
    const date = msg.date()
    // 获取发送消息的联系人
    const fromName = msg.from()
    // 查看这条消息是否为机器人发送的。
    const fromSelf = msg.self()
    // 消息类型
    const type = msg.type()
    const types = bot.Message.Type
    const contact = await bot.Contact.find({ name: fromName.name() })

    // 判断消息发自群还是其他
    if (toName) {
      console.log(`${chalk.blue(getTime(date))}: 来自${chalk.red(fromName.name())}发送给${chalk.green(toName.name())}的消息: ${chalk.whiteBright(text)}`)
    }
    if (room) {
      const topic = await room.topic()

      console.log(`${chalk.blue(getTime(date))}: 来自${chalk.red(fromName.name())}发送给${chalk.green(topic)}的消息: ${chalk.whiteBright(text)}`)
    }

    // if (type === types.Unknown) {
    //   contact.say('啥东西')
    // }
    // if (type === types.Attachment) {
    //   contact.say('啊啊啊')
    // }
    // if (type === types.Audio) {
    // }
    if (type !== types.Text && selfName !== fromName.name() && !fromSelf) {
      await contact.say('<img class="qqemoji qqemoji0" text="[微笑]_web" src="/zh_CN/htmledition/v2/images/spacer.gif" />')
      return
    }

    // 文本消息 7
    if (type === types.Text && selfName !== fromName.name() && !fromSelf) {
      if (/class="qqemoji/.test(text)) {
        await contact.say('<img class="qqemoji qqemoji0" text="[微笑]_web" src="/zh_CN/htmledition/v2/images/spacer.gif" />')
        return
      }
      reply(bot, fromName.name(), text)
    }
  }
}
