import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

export default {
  input: 'src/domx.js',
  output: {
    file: 'lib/index.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    compiler(),
  ],
};
