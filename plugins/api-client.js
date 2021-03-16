export default (context, inject) => {
  // const hello =  msg => console.log(`Hello ${msg}!`)
  // Inject $hello(msg) in Vue, context and store.
  // inject('hello', msg => console.log(`Hello ${msg}!`))
  inject('api', api)
  context.$api = api
}
const api = {
  getDate() {
    return fetch('/api/date');
  }
}
