const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')
const config = loadConfig(__dirname, null, { dev: true })

describe('dev', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(config, { waitFor: 2000 })))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
