import module from './vuex'

const registerStore = store => {
  store.registerModule('STARTVUE_LOADER', { ...module })
}

export default registerStore
