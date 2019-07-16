jest.setTimeout(60000)

const { Nuxt } = require('nuxt-edge')
const logger = require('../lib/logger')
const { moduleExists } = require('../lib/utils')
const config = require('./fixture/nuxt.config')

logger.mockTypes(() => jest.fn())

jest.mock('../lib/utils', () => ({
  moduleExists: jest.fn()
}))

let nuxt

describe('warn', () => {
  beforeAll(async () => {
    moduleExists.mockImplementation(() => false)

    nuxt = new Nuxt(config)
    await nuxt.ready()
  })

  beforeEach(() => {
    logger.clear()
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if not found the `eslint` dependency', () => {
    expect(moduleExists).toBeCalledWith('eslint')
    expect(moduleExists).toHaveReturnedWith(false)
    expect(logger.warn).toHaveBeenCalledWith(
      'The dependency `eslint` not found.',
      'Please run `yarn add eslint --dev` or `npm install eslint --save-dev`'
    )
  })
})
