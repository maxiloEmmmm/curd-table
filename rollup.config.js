import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import flow from 'rollup-plugin-flow-no-whitespace';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import VuePlugin from 'rollup-plugin-vue2'
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import json from "@rollup/plugin-json"
import alias from "@rollup/plugin-alias"
export default {
    input: "index.js",
    output: {
        file: "dist/index.js",
        format: 'esm',
        name: 'maxiloVueTool',
    },
    external(id) {
        return ["maxilo-vue-ysz-ui", "@babel/runtime-corejs3", "vue", "ant-design-vue", "codemirror", "dayjs", "js-beautify", "vee-validate"].filter(m => {
            return (new RegExp(`^${m}/*(.+)?`)).test(id)
        }).length > 0
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        alias({
            entries: {
                'vue': "vue/dist/vue.js"
            }
        }),
        json(),
        flow(),
        resolve({}),
        VuePlugin(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
        }), 
        
        commonjs(), 
        postcss({
            plugins: [cssnano],
            minimize: true,
            extract: "index.css",
            use: {
                less: {
                    javascriptEnabled: true
                }
            }
        }),
    ],
}