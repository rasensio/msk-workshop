import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.md'

// 1. getting started
import GettingStartedCreateRole from './views/1getting-started/CreateRole.md'
import GettingStartedSetupIDE from './views/1getting-started/SetupIDE.md'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/getting-started/create-role', component: GettingStartedCreateRole },
    { path: '/getting-started/setup-ide', component: GettingStartedSetupIDE },
  ]
})
