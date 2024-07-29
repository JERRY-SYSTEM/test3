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
  iconAssets: "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css", // 字体图标资源链接
  repo: "https://github.com/somediang", // github地址
  docsDir: "src",
  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Search", "Links", "Repo", "Outlook"],
  },
  navbar,
  sidebar,
  sidebarSorter: "order",
  footer: "",
  displayFooter: false,
  editLink: false, // 是否展示编辑此页链接
  contributors: false, // 是否展示贡献者
  //路径导航
  breadcrumb: true,
  pageInfo: ["ReadingTime", "Date", "Word", "Category", "Tag"],

  /**
   * 博客模式配置
   */
  blog: {
    name: 'Glow Studio', // 博主姓名
    avatar: 'https://yanxuan.nosdn.127.net/f9758a122f1284b59b3df7a0345ae7ef.png', // 博主头像
    description: '心心相融，爱达未来', // 口号、座右铭或介绍语
    intro: "/intro.html",
    medias: { // 博主的媒体链接配置
      BiliBili: "https://space.bilibili.com/702028797",
      WechatMP: "https://yanxuan.nosdn.127.net/41c14c219f06fcc1ceefc861d3c391a1.jpg",
      QQ: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=EEh7V2N3pRqAWGrPWW2kSTwdKmZHm2SD&authKey=wwaCNoL3F%2Bi5wbyUy7LL88G1L%2FC29ARggZ6PJa2ue5%2BAZMyLmlDsI6a9bP6%2BQfOK&noverify=0&group_code=948504002",
      Email: "mailto:2449837493@qq.com",
    },
    roundAvatar: true, // 是否剪裁头像为圆形形状
    articlePerPage: 5, // 每页的文章数量
  },
  hotReload: true,
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
    /**
     * 主题启用的组件
     */
    components: {
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
    },

    copyright: {
      global: true,
      canonical: "https://studio.000708.xyz",
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      components: true,
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
    },

    // PWA支持
    pwa: {
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
    },
  },
}, { custom: true, });
