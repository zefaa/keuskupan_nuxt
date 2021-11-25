module.exports = {
  wrapUrl (path) {
    let requestUrl = 'http://192.168.5.9:8890/' + path
    if (process.env.USE_LOCAL === 'false') {
      requestUrl = 'https://api.imavi.org/imavi/' + path
    }
    return requestUrl
  }
}
