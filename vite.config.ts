import {fileURLToPath, URL} from 'node:url'

import {defineConfig, type PluginOption} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginRequire from 'vite-plugin-require'
import legacy from '@vitejs/plugin-legacy'
import ptw from 'postcss-px-to-viewport'

const needLegacy: boolean = false
const plugins: PluginOption [] = [
    vue(),
    // 兼容jsx语法
    vueJsx(),
    // 兼容require方法写法
    (vitePluginRequire as any).default(),
]
if (needLegacy) {
    plugins.push(
        legacy({
            // 是否渲染现代浏览器模块，关闭可一定程度提高打包速度，开启后会打包两套代码
            // renderModernChunks: true,
            // 手动添加更新颗粒度的相关polyfills
            // polyfills: [],
            // 如果开发者希望添加非corejs的polyfill，就加在这个字段里面
            additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
            targets: [
                'chrome>=55',
                'Safari>=10',
                'ios>=12',
                'Android>=5',
            ],
        })
    )
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins,
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        postcss: {
            plugins: [
                ptw({
                    unitToConvert: 'px',
                    viewportWidth: 375,
                    unitPrecision: 6,
                    viewportUnit: 'vw',
                    fontViewportUnit: 'vw',
                    selectorBlackList: ['.ignore'],
                    minPixelValue: 1
                })
            ]
        }
    },
    build: {
        // 默认modules，es2015选项可以对语法进行降级es6
        target: 'es2015',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor'
                    }
                },
                // 将入口chunk和异步chunk输出到js目录下
                entryFileNames: `assets/js/[name].js`,
                chunkFileNames: `assets/js/[name]-[hash].js`,
                assetFileNames: ({name}) => {
                    if (/\.(css|scss|sass)$/.test(name || '')) {
                        return `assets/css/[name]-[hash].[ext]`;
                    }
                    // 其他资源（如图片、字体等）保持在assets目录下
                    return `assets/[name]-[hash].[ext]`;
                }

            }
        }
    }
})
