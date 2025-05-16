import { defineConfig } from 'cypress';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    async setupNodeEvents(on, config) {
      const { register } = await import('ts-node');
      register({
        transpileOnly: true,
        project: path.join(__dirname, 'cypress/tsconfig.json'),
      });

      return config;
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
