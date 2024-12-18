import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginRequire from 'vite-plugin-require'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 兼容jsx语法
    vueJsx(),
    // 兼容require方法写法
    (vitePluginRequire as any).default(),
    // if necessary
    legacy({
      // 是否渲染现代浏览器模块，关闭可一定程度提高打包速度，开启后会打包两套代码
      // renderModernChunks: true,
      // 手动添加更新颗粒度的相关polyfills
      // polyfills: [],
      // 如果开发者希望添加非corejs的polyfill，就加在这个字段里面
      // additionalLegacyPolyfills: [''],
      targets: [
        'defaults',
        'Chrome >= 55',
        'Safari >= 10',
        'not IE 11',
      ],
      polyfills: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // 默认modules，es2015选项可以对语法进行降级es6
    // target: 'es2015',
  }
})
