jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')
const logger = require('@/logger')
const { moduleExists } = require('@/utils')

const config = require('./fixture/nuxt.config')
config.dev = true
config.debug = true

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

logger.mockTypes(() => jest.fn())

jest.mock('@/utils', () => ({
  moduleExists: jest.fn()
}))

describe('module', () => {
  beforeEach(() => {
    logger.clear()
  })

  test('render', async () => {
    moduleExists.mockImplementation(() => true)

    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)

    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('should warn if not found the `eslint` dependency', async () => {
    moduleExists.mockImplementation(() => false)

    nuxt = new Nuxt(config)
    await nuxt.ready()

    expect(logger.warn).toHaveBeenCalledWith(
      'The dependency `eslint` not found.',
      'Please run `yarn add eslint --dev` or `npm install eslint --save-dev`'
    )
  })

  afterEach(async () => {
    await nuxt.close()
  })
})
