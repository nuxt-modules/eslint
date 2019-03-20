jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')

const config = require('./fixture/nuxt.config')
config.dev = true
config.debug = true

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

describe('module', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
