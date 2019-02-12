jest.setTimeout(60000)
process.env.PORT = process.env.PORT || 5060

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')

const config = require('../example/nuxt.config')

const url = path => `http://localhost:${process.env.PORT}${path}`
const get = path => request(url(path))

describe('basic', () => {
  let nuxt

  beforeAll(async () => {
    config.dev = true
    config.debug = true
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
