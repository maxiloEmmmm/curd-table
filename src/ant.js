import {
    Button,
    ConfigProvider,
    Input,
    InputNumber,
    Spin,
    Table,
    Modal,
    Select,
    Icon,
    Message,
    Notification,
    DatePicker,
    Switch,
    Pagination,
    Badge,
} from 'ant-design-vue'

export default {
    install: function(vue){
        vue.use(Button)
        vue.use(ConfigProvider)
        vue.use(Card)
        vue.use(Input)
        vue.use(InputNumber)
        vue.use(Spin)
        vue.use(Table)
        vue.use(Modal)
        vue.use(Select)
        vue.use(Icon)
        vue.use(DatePicker)
        vue.use(Switch)
        vue.use(Pagination)
        vue.use(Badge)
        vue.use(function(Vue){
            Vue.prototype.$message = Message
            Vue.prototype.$notification = Notification
            Vue.prototype.$info = Modal.info
            Vue.prototype.$success = Modal.success
            Vue.prototype.$error = Modal.error
            Vue.prototype.$warning = Modal.warning
            Vue.prototype.$warn = Modal.warn
            Vue.prototype.$confirm = Modal.confirm
        })
    }
}
