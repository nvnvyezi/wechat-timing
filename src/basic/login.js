const chalk = require('chalk')

module.exports = {
  onLogin: user => {
    console.log(chalk.green(`欢迎${user.domain}登陆`))
  }
}
