import store from '../vuex'

const isAuthRoute = route => route.path.indexOf('/auth') !== -1
const isLoged = () => store.getters.isLoged

export default (to, from, next) => {
  if (!isAuthRoute(to) && !isLoged()) {
    next('/auth')
  } else {
    next()
  }
}
