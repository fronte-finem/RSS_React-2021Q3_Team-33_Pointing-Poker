import { defineConfig, loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export const BUILD_DIR = 'dist';

// https://vitejs.dev/config/

export default defineConfig(({ mode, command }) => {
  const isDev = command === 'serve';
  const isProd = command === 'build';
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      DEV_MODE: isDev,
      PROD_MODE: isProd,
      ...env,
    },

    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
      postcss: './postcss.config.js',
    },

    clearScreen: true,

    server: {
      host: '0.0.0.0',
      open: true,
    },

    build: {
      outDir: BUILD_DIR,
      emptyOutDir: true,
      assetsInlineLimit: 0,
      minify: 'esbuild',
      sourcemap: 'hidden',
      brotliSize: false,
    },

    plugins: [
      checker({
        typescript: true,
        eslint: {
          files: ['./client/src'],
          extensions: ['.ts', '.tsx'],
        },
      }),
      tsconfigPaths({
        loose: true,
      }),
      reactRefresh(),
    ],
  };
});
