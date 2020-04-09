import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from 'rollup-plugin-json';
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json';


export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    },
    {
      file: pkg.umd,
      name: pkg.umdName,
      format: 'umd',
    }
  ],
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.ts','.tsx']
    }),
    resolve({
      mainFields: ['module', 'main', 'browser'],
      extensions: ['.ts','.tsx']
    }),
    commonjs(),
    json(),
  ]
};
