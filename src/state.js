import {
    notification
} from 'ant-design-vue'
import utils from "./utils"
const newState = function(p, {title = "", response = null, message = null, failOnly = false}){
    let key = utils.random("Notification-")
    title = title ? `${title} - ` : ""
    message = message ? message : r => ""
    notification.info({
        message: `${title}提示`,
        duration: 0,
        key,
        description: (h) => <tool-state message={message} promise={p} vOn:end={r => {
            response && response(r)
            if(failOnly && r.ok) {
                notification.close(key)
                return
            }
            setTimeout(() => notification.close(key), 4500)
        }}></tool-state>
    })
}
const newFailState = (p, {title = "", response = null, message = null}) => {
    newState(p, {title, response, message, failOnly: true})
}
export default {
    newState,
    newFailState
}