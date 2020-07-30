// 각 내보내기에 대해 반복적으로 호출될 수 있는 기능인 기본 내보내기를 사용합니다. 지금은 앱 인스턴스를 생성하고 반환하는 것 외에는 다른 작업을 수행하지는 않지만, 나중에 서버 측 경로 일치 및 데이터 프리 페칭 로직을 수행합니다.
import { createApp } from './app'

export default context => {
  // 비동기 처리가 있을수 있으니 Promise로 처리한다.
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    // 서버 사이드 router's location
    router.push(context.url)

    // wait until router has resolved possible 비동기 컴포넌트, 훅
    router.onReady(() => {
      // const matchedComponents = router.getMatchedComponents()
      // // no matchhed routes, reject with 404
      // if (!matchedComponents.length) {
      //   return reject({ code: 404 })
      // }
      // This `rendered` hook is called when the app has finished rendering
      context.rendered = () => {
        // After the app is rendered, our store is now
        // filled with the state from our components.
        // When we attach the state to the context, and the `template` option
        // is used for the renderer, the state will automatically be
        // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
        context.state = store.state
      }

      resolve(app)
    }, reject)
  })
}