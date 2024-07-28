import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  title: "GlowPE Project",
  lang: "zh-CN",
  head: [
    // meta
    [ "meta", { name: "theme-color", content: "#2980b9" }],
    [ "meta", { name: "robots", content: "all" }],
    [ "meta", { name: "author", content: "BraumAce" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    [ "meta", { "http-equiv": "Pragma", content: "no-cache" }],
    [ "meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta", {
        name: "keywords",
        content: "GlowPE, Glow, PE, WinPE",
      },
    ],
    [ "meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ],

  bundler: viteBundler(),

  theme,

  // Enable it with pwa
  shouldPrefetch: false,

  // 组件
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    },
  },
});
