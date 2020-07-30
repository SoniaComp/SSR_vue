// SSR: 기본적으로 앱의 '스냅샷' 렌더링
// 클라이언트 측 앱을 마운트 하기 전에 비동기 데이터를 사용할 수 있어야 합니다.

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 데이터가 뷰 구성 요소 외부, 전용 데이터 저장소 또는 "상태 컨테이너"에 있어야 합니다.
// HTML에서 상태를 직렬화하고 인라인

import { fetchItem } from './api'

export function createStore() {
  return new Vuex.Store({
    state: () => ({
      items: {}
    }),
    actions: {
      fetchItem({ commit }, id) {
        return fetchItem(id).then(item => {
          commit('setItem', { id, item })
        })
      }
    },
    mutations: {
      setItems(state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    }
  })
}