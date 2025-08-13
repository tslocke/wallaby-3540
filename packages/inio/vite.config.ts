import { mergeConfig, type ViteDevServer } from 'vite'
import { baseConfig } from '../../vite.config.base'
import type { IncomingMessage, ServerResponse } from 'http'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default mergeConfig(baseConfig, {
  plugins: [
    solid(),
    tailwindcss(), 
    {
      name: 'dev-playground',
      configureServer(server: ViteDevServer) {
        server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
          if (req.url?.startsWith('/dev/') && !req.url.includes('.') && req.url !== '/dev/index.html') {
            req.url = '/dev/index.html'
          }
          next()
        })
      }
    }
  ],
  test: {
    environment: 'jsdom',
    globals: true,
  }
}) 
