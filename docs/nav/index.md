---
title: CHUAN导航
layoutClass: m-nav-layout
outline: [2, 3, 4]
description: CHUAN导航网,收藏并记录有趣、实用的知识网站，提供便捷可视化导航分类。
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# CHUAN导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

## 关于我的个人导航页

::: tip 💡 为什么要做这个导航页？
我创建这个 个人导航页，是为了更高效地整理和管理我常用的网站、工具和资源。它不仅是我个人的知识库，也是一个便捷的入口，帮助我快速访问常用链接，同时也能与志同道合的朋友们分享优质内容。

:::


<!--``` json{1}
    # 这是一个例子，亦可参照其格式进行编辑
    {
        icon: '/icons/nav/百科/中文 Minecraft Wiki.ico',
        title: '中文 Minecraft Wiki',
        desc: 'Minecraft最著名的、最权威的非官方百科网站',
        link: 'https://zh.minecraft.wiki/',
    },
```
:::-->

## 特别鸣谢🎉

感谢 [maomao1996](https://github.com/maomao1996/) 对于导航样式模块的开发  
感谢 [磁铁开发部（MDD）](https://github.com/MSCMDD "磁铁开发部（MDD）") 对导航样式的二次开发以及内容错误的修正与导航的补充
