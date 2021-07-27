const db = {
  hostname: 'tfb-database',
  port: 5432,
  user: 'benchmarkdbuser',
  pass: 'benchmarkdbpass',
  database: 'hello_world',
  bufferSize: 64 * 1024,
  version: 0x00030000
}

const server = {
  address: '0.0.0.0',
  port: 8080
}

const templates = {
  fortunes: 'fortunes.html',
  settings: { rawStrings: false, compile: true }
}

const maxRandom = 10000
const maxQuery = 10

module.exports = { db, server, maxRandom, maxQuery, templates }