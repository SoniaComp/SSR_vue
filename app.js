// 각 요청마다 새로운 루트 Vue 인스턴스를 만들고 있습니다. 이는 각 사용자가 자신의 브라우저에서 새로운 앱 인스턴스를 사용하는 방식과 유사합니다.
// 여러 요청에서 공유 인스턴스를 사용하면, 요청 간 상태 오염이 쉽게 발생합니다.

const Vue = require('vue')
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

export function createApp(context) {
  //create router instance
  const router = createRouter()
  const store = createStore()

  // sync so that route state is available as part of the store
  sync(store, router)

  const app = new Vue({
    // inject router instance into root Vue instance
    router,
    store,
    render: h => h(App)
  })

  // return both the app and the router
  return { app, router, store }
}