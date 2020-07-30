// Vue 인스턴스

// 1. Vue 인스턴스 생성
const Vue = require('Vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})
// 2. renderer 생성
const renderer = require('vue-server-renderer').createRenderer()
// vue instance를 html로 바꾸기
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
  // => <div data-server-rendered="true">Hello World</div>
}).catch(err => {
  console.log(err)
})

// renderer.renderToString(app).then(html => {
//   console.log(html)
// }).catch(err => {
//   console.log(err)
// })