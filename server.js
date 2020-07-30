// Vue 인스턴스

// 1. Vue 인스턴스 생성
const Vue = require('Vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})
const createApp = require('./app')

// 2. renderer 생성
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const context = { url: req.url }
  const app = createApp(context)

  renderer.renderToString(app, (err, html) => {
    res.end(html)
  })
})

// vue instance를 html로 바꾸기
// renderer.renderToString(app, (err, html) => {
//   if (err) throw err
//   console.log(html)
//   // => <div data-server-rendered="true">Hello World</div>
// }).catch(err => {
//   console.log(err)
// })

// renderer.renderToString(app).then(html => {
//   console.log(html)
// }).catch(err => {
//   console.log(err)
// })

// 앱 인스턴스를 직접 만드는 대신 각요청에 대해 새로운 앱 인스턴스를 만들기 위해 반복적으로 실행될 수 있는 팩토리 함수를 노출

// createApp을 Vue 인스턴스에 주입

// Vue 앱을 웹팩을 사용해 번들로 클라이언트에 제공
// 클라이언트 측 코드를 이전 브라우저에 맞게 변환해야 한다.
// 웹팩을 사용하여 클라이언트와 서버 모두에 앱을 번들링
