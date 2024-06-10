import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "out",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve({
      preferBuiltins: true,
      browser: false,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "out",
    }),
  ]
};
