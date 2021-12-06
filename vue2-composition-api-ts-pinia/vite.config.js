import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import ViteComponents from "vite-plugin-components";

const config = defineConfig({
  server: {
    port: 8088,
    open: true
  },
  base: '',
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
    },
    dedupe: ["vue-demi"],
  },
  build: { minify: true },
  plugins: [
    createVuePlugin(),
    // ViteComponents({
    //   customComponentResolvers: [
    //     ViteIconsResolver({
    //       componentPrefix: "",
    //     }),
    //   ],
    // })
  ]
})

export default config