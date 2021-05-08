import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import path from "path";
import { babel } from "@rollup/plugin-babel";
import replace from "rollup-plugin-replace";
import copy from "rollup-plugin-copy";
import posthtml from "rollup-plugin-posthtml-multi";
import include from "posthtml-include";
//import alias from 'rollup-plugin-alias';

export default {
    input: "src/main.js",
    output: {
        file: path.resolve("dist/static/build/main.js"),
        format: "iife",
        name: "bundle",
    },
    plugins: [
        nodeResolve(),
        posthtml({
            watch: false,
            options: {
                extract: "../..",
                plugins: [include({ encoding: "utf8" })],
            },
        }),
        postcss({
            // Or with custom file name, it will generate file relative to bundle.js in v3
            extract: path.resolve("dist/static/build/styles.css"),
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        babel({
            babelHelpers: "bundled",
        }),
        copy({
            targets: [{ src: "src/static/assets", dest: "dist/static" }],
        }),
    ],
};
