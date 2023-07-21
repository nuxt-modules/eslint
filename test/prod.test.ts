import { describe, test, expect } from 'vitest'
import { setup, useTestContext } from '@nuxt/test-utils'

describe('prod', async () => {
  await setup({
    fixture: '../playground',
    server: false,
    dev: false
  })

  test('should not added eslint plugin', () => {
    const { nuxt } = useTestContext()
    expect(nuxt?.hooks._hooks['vite:extendConfig']).toHaveLength(6)
  })
})
