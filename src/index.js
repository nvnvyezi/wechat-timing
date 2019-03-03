const { Wechaty } = require('wechaty')

const { onScan } = require('./basic/scan')
const { onLogin } = require('./basic/login')
const { onLogout } = require('./basic/logout')
const { onMessage } = require('./basic/message')

const bot = new Wechaty({ name: 'liliye' })

bot
  //  当机器人需要扫码登录的时候，会触发这个事件，当手机扫码登录后，机器人就可以登录进去了。
  .on('scan', onScan)
  // 当机器人登陆成功后，会触发这个事件。
  .on('login', onLogin)
  // 当机器人退出登陆的时候，会触发到这个事件。
  .on('logout', onLogout)
  // 当有新消息的时候会触发这个事件。
  .on('message', onMessage.bind(this, bot))
  .start()
