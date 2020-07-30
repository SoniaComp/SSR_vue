// 각 내보내기에 대해 반복적으로 호출될 수 있는 기능인 기본 내보내기를 사용합니다. 지금은 앱 인스턴스를 생성하고 반환하는 것 외에는 다른 작업을 수행하지는 않지만, 나중에 서버 측 경로 일치 및 데이터 프리 페칭 로직을 수행합니다.
import { createApp } from './app'

export default context => {
  const { app } = createApp()
  return app
}