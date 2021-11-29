module.exports = {
  wrapUrl (path) {
    let requestUrl = 'http://192.168.5.8:3005/' + path
    if (process.env.USE_LOCAL === 'false') {
      requestUrl = 'https://api.imavi.org/imavi/' + path
    }
    return requestUrl
  }
}
