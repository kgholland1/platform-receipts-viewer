/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare namespace NodeJS {
  interface ProcessEnv {
  readonly VUE_APP_CLIENT_URL: string
  readonly VUE_APP_MDA_URL: string
  readonly VUE_APP_API_KEY: string
  }
}