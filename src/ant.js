import {
    Button,
    ConfigProvider,
    Input,
    InputNumber,
    Spin,
    Table,
    Modal,
    Select,
    message,
    notification,
    DatePicker,
    Switch,
    Pagination,
    Badge,
    Space,
} from 'ant-design-vue'

export default {
    install: function(app){
        app.use(Space)
        app.use(Button)
        app.use(ConfigProvider)
        app.use(Input)
        app.use(InputNumber)
        app.use(Spin)
        app.use(Table)
        app.use(Modal)
        app.use(Select)
        app.use(DatePicker)
        app.use(Switch)
        app.use(Pagination)
        app.use(Badge)
        app.use(function(Vue){
            Vue.config.globalProperties.$message = message
            Vue.config.globalProperties.$notification = notification
            Vue.config.globalProperties.$info = Modal.info
            Vue.config.globalProperties.$success = Modal.success
            Vue.config.globalProperties.$error = Modal.error
            Vue.config.globalProperties.$warning = Modal.warning
            Vue.config.globalProperties.$warn = Modal.warn
            Vue.config.globalProperties.$confirm = Modal.confirm
        })
    }
}
