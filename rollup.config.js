import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import flow from 'rollup-plugin-flow-no-whitespace';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import VuePlugin from 'rollup-plugin-vue'
import jsx from 'acorn-jsx';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

export default {
    input: "index.js",
    output: {
        file: "dist/index.js",
        format: 'umd',
        name: 'maxiloVueTool',
    },
    acornInjectPlugins: [
        jsx()
    ],
    plugins: [
        flow(),
        VuePlugin({
            compileTemplate: true,
            css: false,
            normalizer : '~vue-runtime-helpers/dist/normalize-component.js'
        }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
        }), 
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        resolve(),
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