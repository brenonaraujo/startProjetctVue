import Vue from 'vue'
import VuewRouter from 'vue-router'
import routes from './routes'
import beforeEach from './beforeEach'

Vue.use(VuewRouter)

const router = new VuewRouter({ routes, linkActiveClass: 'active' })

router.beforeEach(beforeEach)

export default router
