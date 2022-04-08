import { setupTest } from '@nuxt/test-utils'

const mockReporter = {
  warn: jest.fn()
}

jest.mock('consola', () => ({
  info: jest.fn(),
  success: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  withTag: jest.fn().mockImplementation(() => mockReporter)
}))

describe('warn', () => {
  setupTest({
    fixture: 'fixture',
    server: true,
    config: {
      dev: true,
      eslint: {
        eslintPath: 'foo'
      }
    }
  })

  test('should warn if not found the `eslint` dependency', () => {
    expect(mockReporter.warn).toHaveBeenCalledWith(
      'The dependency `foo` not found.',
      'Please run `yarn add eslint --dev` or `npm install eslint --save-dev`'
    )
  })
})
