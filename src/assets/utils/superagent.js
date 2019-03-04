const superagent = require('superagent')

function request(method, url, params = {}, data = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    superagent(method, url)
      .query(params)
      .send(data)
      .set(headers)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .then(res => {
        if (res.ok) {
          if (res.text) {
            resolve(res.text)
          }
        }
      })
      ['catch'](err => {
        reject(err)
      })
  })
}

module.exports = request
