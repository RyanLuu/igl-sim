import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import postcss from "rollup-plugin-postcss";
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "./src/main.js",
  output: {
    file: "public/main.js",
    format: "iife",
    sourcemap: !production,
  },
  plugins: [
    nodeResolve({ preferBuiltins: false }), // or `true`
    commonjs(),
    production && terser(),
    postcss({
      extensions: ["/**/*.scss"],
      extract: "style.css",
      minimize: production,
      use: [
        [
          "sass",
          {
            includePaths: [
              './node_modules/'
            ],
          },
        ],
      ],
    }),
  ],
};
