import { defineConfig } from 'vitest/config'
import { baseConfig } from './vite.config.base'
import { mergeConfig } from 'vite'

export default mergeConfig(baseConfig, defineConfig({
  test: {
    globals: true,
    environment: 'jsdom'
  }
}))