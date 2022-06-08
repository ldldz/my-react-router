import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = ["react", "react/jsx-runtime"];

export default {
  input: "index.ts",
  output: {
    file: pkg.main,
    format: "es",
  },
  external,
  plugins: [resolve({ extensions }), babel({ exclude: "node_modules/**" }), typescript(), peerDepsExternal()],
};
