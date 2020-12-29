import utils from "./utils"

const config = {
    responsive: {
        cb: []
    }
}

export default {
    addResponsiveCallback: function(cb) {
        config.responsive.cb.push(cb)
        utils.dispatchEvent("resize")
    },
    dispatch(t) {
        config.responsive.cb.forEach(c => c(t))
    }
}