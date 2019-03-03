const chalk = require('chalk')

module.exports = {
  onLogout: user => {
    console.log(chalk.cyan(`${user}爷， 您走好，欢迎下次再来！`))
  }
}
