import components from './src'
import ant from "./src/ant"
import state from "./src/state"
import http from "./src/http"

import { ValidationObserver, ValidationProvider } from 'vee-validate';

const install = function(vue){
    ant.install(vue)
    components.map(component => {
        vue.component(component.name, component)
    })
    vue.component('ValidationObserver', ValidationObserver)
    vue.component('ValidationProvider', ValidationProvider)
    vue.prototype.$state = state
}

if (window.Vue) {
    Vue.use(install)
}

export default {
    install,
    http
}