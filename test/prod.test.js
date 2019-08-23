const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('prod', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, null, { dev: false }), { waitFor: 2000 })))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
