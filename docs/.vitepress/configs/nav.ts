import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '关于', link: '/rules/' },
  {
    text: '友链',
    link: '/structure/',
  },
  { text: "知识库", link: '/press/' },
  { text: "导航", link: '/nav/' },
  //{
    //text: "社区服务",
              //items: [
                //{ text: "AI对话", link: "https://chat.mcjpg.org/" },
                //{ text: "文件分发服务", link: "https://fds.mcjpg.org/" },
                //{ text: "MCJPG 社区图床", link: "https://image.mcjpg.org/" },
                //{ text: "Markdown 编辑器", link: "https://editor.mcjpg.org/" },
                //{ text: "状态监测", link: "https://status.mcjpg.org/" },
                //{ text: "状态监测(备用)", link: "https://bstatus.mcjpg.org/" },
              //]
  //},
  //{
    //text: "友情链接",
              //items: [
                //{ text: "MSCPO", link: "https://mscpo.top/" },
                //{ text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
                //{ text: "风梨网", link: "https://www.flweb.cn/" },
              //]
  //}
]
