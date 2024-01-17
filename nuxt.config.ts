// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 页头信息
  app: {
    head: {
      charset: 'utf-8', // 快捷方式
      viewport: 'width=device-width, initial-scale=1', // 快捷方式
      title: '房讯通',
      meta: [
        { name: 'description', content: 'My amazing site.' },
        { name: 'charset', content: 'utf-8' },
      ],
      "link": [],
      "style": [],
      "script": []
    }
  },
  modules: [
    '@nuxt/ui',
    // 引入 Pinia
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          "defineStore",
          "storeToRefs"
        ],
      },
    ]
  ]
})
