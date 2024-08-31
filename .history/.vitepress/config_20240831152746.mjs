import { defineConfig } from 'vitepress';
import { set_sidebar } from './utils/auto_sidebar.mjs';	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-yt/",
  title: "元拓规范文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端开发规范', link: '/front-end/specification/CSS 规范' },
      { text: '后端开发规范', link: '/backend/specification' },
      { text: '产品设计开发规范', link: '/product/specification' },
    ], 

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: { 
      "/front-end/specification": set_sidebar("/front-end/specification") ,
      "/backend/specification": set_sidebar("backend/specification") ,
      "/product/specification": set_sidebar("product/specification") 
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YT-DATA/docs-yt' }
    ]
  }
})
