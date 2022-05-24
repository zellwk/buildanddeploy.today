import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  site: 'https://buildanddeploy.today',
  integrations: [svelte()],
  vite: {
    server: {
      host: '0.0.0.0'
    }
  }
})
