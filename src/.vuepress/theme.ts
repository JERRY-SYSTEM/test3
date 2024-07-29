import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://pe.studio.000708.xyz",
  logo: "https://yanxuan.nosdn.127.net/f9758a122f1284b59b3df7a0345ae7ef.png", // 网站左上角logo
  logoDark: "https://yanxuan.nosdn.127.net/f9758a122f1284b59b3df7a0345ae7ef.png", // 黑夜模式下网站左上角logo
  favicon: "https://yanxuan.nosdn.127.net/f9758a122f1284b59b3df7a0345ae7ef.png",
  author: {
    name: "Glow Studio", // 作者姓名
    email: "2449837493@qq.com", // 作者 Email
    url: "https://studio.000708.xyz" // 作者网站
  },
  iconAssets: "//at.alicdn.com/t/c/font_4608718_rak4bm2mgkp.css", // 字体图标资源链接
  repo: "https://github.com/somediang", // github地址
  docsDir: "src",
  navbar,
  sidebar,
  footer: "",
  displayFooter: false,
  editLink: false, // 是否展示编辑此页链接
  contributors: false, // 是否展示贡献者
  //路径导航
  breadcrumb: true,
  pageInfo: ["ReadingTime", "Date", "Word", "Category", "Tag"],

  blog: {
    avatar: "BraumAce.jpg",
    description: "一个后端开发者",
    sidebarDisplay: "mobile",
    intro: "/intro.html",
    medias: {
      Email: "mailto:1693717911@qq.com",
      Gitee: "https://gitee.com/BraumAce",
      GitHub: "https://github.com/BraumAce",
      // Gitlab: "https://example.com",
      // Lark: "https://www.feishu.cn/invitation/page/add_contact/?token=e16lc6b4-120b-4742-b51f-ca731b693bfa&amp;unique_id=UBZmuOUVhQ7tEjVABCoQtQ==",
      QQ: "tencent://message/?uin=1693717911&Site=&Menu=yes",
      Wechat: "weixin://dl/business/?t=Pithy-SeeYou",
      Zhihu: "https://www.zhihu.com/people/18779889803",
      BiliBili: "https://space.bilibili.com/351506386",
    },
  },

  // page meta
  metaLocales: {
    lastUpdated: "上次更新",
    editLink: "在 GitHub 上编辑此页",
  },

  // 加密文章
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  hotReload: true,

  blogLocales: {
    reprint: "转载",                  
  },

  plugins: {
    blog: {
        type: [
          {
            key: "reprint",
            filter: (page) => page.frontmatter.reprint,
            sorter: (pageA, pageB) =>
              compareDate(pageA.frontmatter.date - pageB.frontmatter.date),
          },
        ],
      },

    // 搜索框
    searchPro: {
      // 索引全部内容
      indexContent: true,
      autoSuggestions: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter(page: any) {
            return page.frontmatter.category;
          },
          formatter: {
            '/': '分类：$content',
          },
        },
        {
          getter(page: any) {
            return page.frontmatter.tag;
          },
          formatter: {
            '/': '标签：$content',
          },
        },
      ],
    },

    // 评论功能
    comment: {
      provider: 'Giscus',
      repo: "BraumAce/ByteLighting",
      repoId: "R_kgDOMP-taA",
      category: "Announcements",
      categoryId: "DIC_kwDOMP-taM4CghxQ",
    },

    components: {
      components: ["Badge", "VPCard", "BiliBili", "PDF"],
    },

    copyright: {
      global: true,
      canonical: "https://blog.braumace.cn/",
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      hint: true,

      chart: true,
      echarts: true,
      flowchart: true,

      katex: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // PWA支持
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "ByteLighting",
            short_name: "Byte",
            url: "/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
}, { custom: true, });
