import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// 配置ref，reactive等的自动导入
import AutoImport from "unplugin-auto-import/vite"
// 按需引入组件
import Components from "unplugin-vue-components/vite"
// 需要按需引入那个组件库,就用去源码看哪个，以前缀为开头
import { VantResolver } from "unplugin-vue-components/resolvers"

const path = require("path")

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: "src/types/auto-import.d.ts",
      imports: ["vue", "vue-router"],
      resolvers: [VantResolver()],
    }),
    Components({
      // 默认就是识别src/components文件，该文件夹下的所有组件都会自动 import，配合setup语法糖直接使用
      dirs: ["src/components"],
      dts: "src/types/components.d.ts",
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      // 配置此项，可以ctrl+左键跳转到使用@开头的源文件，不加无法跳转
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/fmsv2": {
        target: "http://192.168.180.138:8081/",
        changeOrigin: true,
        // rewrite: (path)=> path.replace('^\/fmsv2/','')
      },
    },
  },
})
