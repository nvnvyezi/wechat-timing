const chalk = require('chalk')
const qrCode = require('qrcode-terminal')

module.exports = {
  onScan: (qrcode, status) => {
    console.log(chalk.red('扫描二维码登录'))
    qrCode.generate(qrcode, { small: true })
    console.log(chalk.red('或者复制链接到浏览器扫描：'))
    console.log(chalk.blue(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}\\n 状态：${status}`))
  }
}
