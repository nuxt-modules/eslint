import { setupTest, get } from '@nuxt/test-utils'

describe('dev', () => {
  setupTest({
    fixture: 'fixture',
    server: true,
    config: {
      dev: true
    }
  })

  test('render', async () => {
    const { body } = await get('/')
    expect(body).toContain('Works!')
  })
})
