import { setupTest, get } from '@nuxt/test-utils'

describe('prod', () => {
  setupTest({
    fixture: 'fixture',
    server: true,
    config: {
      dev: false
    }
  })

  test('render', async () => {
    const { body } = await get('/')
    expect(body).toContain('Works!')
  })
})
