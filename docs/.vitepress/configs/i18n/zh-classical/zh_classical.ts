import { defineConfig, type DefaultTheme } from 'vitepress'
import {  nav, sidebar, } from './'

export const lch = defineConfig({
    title: 'CHUAN網站',
    description: '记录思考、灵感与探索，从产品到工业智能，从阅读感悟到摄影生活，打造属于自己的个人知识库。',

    themeConfig: {
        siteTitle: 'CHUAN網站',
        nav,
        sidebar,
        editLink: {
            pattern: 'https://github.com/MineJPGcraft/MCJPG/edit/main/docs/:path',
            text: '編輯此頁'
          },
        
        outline: {
            level: 'deep',
            label: '頁面索引',
          },
      
        footer: {
            message: 'CHUAN的知识库',
            copyright: '版權所有 © 2025-至今 <a href="https://www.yunlianzhigong.com/">CHUAN</a>— —<a href="https://github.com/rebornv/CHUAN">网站的仓库</a>'
          },
      
        lastUpdated: {
        text: '最後更新於',
            formatOptions: {
              dateStyle: 'short',
              timeStyle: 'medium',
            },
          },
      
        docFooter: {
            prev: '上頁',
            next: '下頁',
          },
      
        returnToTopLabel: '歸卷首',
        sidebarMenuLabel: '目錄',
        darkModeSwitchLabel: '陰陽交替',
        lightModeSwitchTitle: '陽',
        darkModeSwitchTitle: '陰',

        notFound: {
          code:'404',
          title:'不在卷末',
          quote:'于此何都无之，他往观之，实亦无聊可以往社之闲',
          linkText:'回卷首',
        },
    }
})

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    lch: {
      placeholder: '檢索文檔',
      translations: {
        button: {
          buttonText: '檢索文檔',
          buttonAriaLabel: '檢索文檔'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除檢索條件',
            resetButtonAriaLabel: '清除檢索條件',
            cancelButtonText: '罷',
            cancelButtonAriaLabel: '罷'
          },
          startScreen: {
            recentSearchesTitle: '檢索歷史',
            noRecentSearchesText: '尚無檢索歷史',
            saveRecentSearchButtonTitle: '存儲至檢索歷史',
            removeRecentSearchButtonTitle: '從檢索歷史刪除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '從收藏刪除'
          },
          errorScreen: {
            titleText: '無法檢索結果',
            helpText: '請君檢查網路連線'
          },
          footer: {
            selectText: '擇',
            navigateText: '換',
            closeText: '罷',
            searchByText: '索引提供者'
          },
          noResultsScreen: {
            noResultsText: '無果',
            suggestedQueryText: '君可檢索',
            reportMissingResultsText: '君認為應有結果？',
            reportMissingResultsLinkText: '點擊反饋'
          }
        }
      }
    }
  }
