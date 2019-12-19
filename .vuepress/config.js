module.exports = {
  lang: 'zh-CN',
  title: 'SpringBootCN',
  description: 'Spring资料收集，网站构建中，敬请期待',
  plugins: ['vuepress-plugin-smooth-scroll', '@vuepress/active-header-links'],
  themeConfig: {
    nav: require('./nav/zh')
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ]
}
