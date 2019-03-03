module.exports = {
  getName: str => {
    const regExp = /Contact<(\S*)>/

    console.log(str, str.match(regExp))
    return str.match(regExp)[1]
  }
}
