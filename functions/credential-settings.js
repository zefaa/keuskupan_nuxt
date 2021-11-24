module.exports = {
  wrapUrl (path) {
    let requestUrl = 'http://localhost:8890/' + path
    if (process.env.USE_LOCAL === 'false') {
      requestUrl = 'https://api.imavi.org/imavi/' + path
    }
    return requestUrl
  }
}
