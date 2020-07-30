import { createApp } from './app'
const { app, router } = createApp()

if (window.__INITIAL_STATE__) {
  // We initialize the store state with the data injected from the server
  store.replaceState(window.__INITIAL_STATE__)
}
// router.onReady 라우터: 컴포넌트 내 후크를 올바르게 호출하기 위해 비동기 라우트 컴포넌트를 미리 분석해야 하기 때문에, 
// 앱을 리턴/마운트 하기 전에 서버와 클라이언트 모두에서 계속 사용해야 함
// router.onReady(() => { app.$mount('#app') })
app.$mount('#app')
// 클라이언트 항목은 단순히 앱을 만들어 DOM에 마운트 합니다.

// 코드 분할
// 필요한 것만 로드: TTI(상호작용시간)