import components from './src'
import ant from "./src/ant"
import state from "./src/state.jsx"
import http from "./src/http"
import mvyu from "maxilo-vue-ysz-ui/ysz-ui.js"
import config from "./src/config"
// import { ValidationObserver, ValidationProvider } from 'vee-validate';
mvyu.config.responsive.cb.push(t => {
    config.dispatch(t)
})
const install = function(vue){
    ant.install(vue)
    mvyu.install(vue)
    components.map(component => {
        vue.component(component.name, component)
    })
    // vue.component('ValidationObserver', ValidationObserver)
    // vue.component('ValidationProvider', ValidationProvider)
    vue.config.globalProperties.$state = state
}

if (window.Vue) {
    Vue.use(install)// eslint-disable-line
}

export default {
    install,
    http,
    config
}