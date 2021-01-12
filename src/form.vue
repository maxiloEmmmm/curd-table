<template>
    <component :is="_box"
        width="80%"
        :closable="false"
        :visible="show">
        <ysz-list-item slot="title" :left="true">
            <span slot="left">{{ _model_title }}</span>
            <a-space>
                <a-icon type="setting" @click="onViewShow" v-if="!_edit" style="font-size: 1.2rem;"/>
                <a-icon :type="store.moreShow ? 'minus' : 'plus'" @click="onMore" v-if="_hasMore" style="font-size: 1.2rem;border: 1px solid;border-radius: 50%;padding: 4px;"/>
            </a-space>
        </ysz-list-item>
        <a-spin :spinning="loading">
            <ValidationObserver ref="ob">
                <a-collapse class="tool-form-panel" :bordered="false" expandIconPosition="right" :activeKey="store.activeKey" @change="this.onCollapseChange">
                <a-collapse-panel :showArrow="showArrow" v-for="layout in _layout" :key="layout.key" :header="layout.title">
                    <ysz-list :no-p="noP" :no-line="false" :row="true" :group="view && !viewShow ? viewCol : layout.col" :key="layout.key">
                        <ValidationProvider style="width:100%" :key="field.field" v-for="(field) in layout.fields" :name="field.title" :rules="field.validate" v-slot="{ errors, validate }">
                            <ysz-list-item-top>
                                <ysz-list-item slot="top">
                                    <span slot="left" style="font-size: 1rem; font-weight: 400;">{{ `${field.title}${field.type == 'code' ? `(${field.option.language})` : ''}` }}</span>
                                    <a-badge style="border-bottom: 1px solid #faad14;" v-show="errors.length" status="warning" :text="errors[0]" />
                                </ysz-list-item>

                                <a-popover v-if="singleRequest && singlePop && field.editing" v-model="field.popShow" trigger="click" placement="right">
                                    <template v-slot:content>
                                        <ysz-list-item-top>
                                            <ysz-list-item-top slot="top" :no-p="noP">
                                                <ysz-list-item no-p left slot="top">
                                                    <tool-form-item slot="left" :emptyLabel="field.placeholder" :ref="field.field" :disabled="_model_disabled.includes(field.field)" editing :value="dataform[field.form_key]" :option="field.option" :type="field.type" @change="(value) => {validate(value), onChange(value, field.form_key, field.on.change)}" :item="dataform"></tool-form-item>
                                                </ysz-list-item>
                                                <tw-alert style="text-align:left" mini left v-if="field.help_msg" :title="field.help_msg" type="info" show-icon />
                                            </ysz-list-item-top>
                                            <a-space>
                                                <a-button type="primary" @click="() => onSinglePopFinish(field)">
                                                    确认
                                                </a-button>
                                                <a-button @click="() => onSinglePopClose(field)">取消</a-button>
                                            </a-space>
                                        </ysz-list-item-top>
                                    </template>
                                    <ysz-list-item no-p left>
                                        <tool-form-item slot="left" style="cursor: pointer" :emptyLabel="field.placeholder" :ref="field.field" :disabled="_model_disabled.includes(field.field)" :editing="false" :value="dataform[field.form_key]" :option="field.option" :type="field.type" @change="(value) => {validate(value), onChange(value, field.form_key, field.on.change)}" :item="dataform"></tool-form-item>
                                        <a-icon type="right" style="color:#aaa"/>
                                    </ysz-list-item>
                                </a-popover>
                                <ysz-list-item-top v-else :no-p="noP" @click="() => onItemClick(field)">
                                    <ysz-list-item no-p left slot="top" :style="`cursor:${field.editing && singleRequest ? 'pointer' : 'default'}`">
                                        <tool-form-item slot="left" :emptyLabel="field.placeholder" :ref="field.field" :disabled="_model_disabled.includes(field.field)" :editing="_edit && field.editing && !singleRequest" :value="dataform[field.form_key]" :option="field.option" :type="field.type" @change="(value) => {validate(value), onChange(value, field.form_key, field.on.change)}" :item="dataform"></tool-form-item>
                                        <a-icon type="right" v-if="field.editing && singleRequest" style="color:#aaa"/>
                                    </ysz-list-item>
                                    <tw-alert style="text-align:left" mini left v-if="field.help_msg" :title="field.help_msg" type="info" show-icon />
                                </ysz-list-item-top>
                            </ysz-list-item-top>
                        </ValidationProvider>
                    </ysz-list>
                </a-collapse-panel>
                </a-collapse>
            </ValidationObserver>
        </a-spin>
        
        
        <ysz-list-item slot="footer" :left="true" v-if="_edit && !this.singleRequest">
            <a-space>
                <a-button @click="cancleHandle" v-if="!view">{{_current_cancel_text}}</a-button>
                <a-button type="primary" @click="okHandle">{{_current_ok_text}}</a-button>
                <slot name="btn"></slot>
            </a-space>
        </ysz-list-item>
        <a-drawer
            placement="right"
            width="100%"
            :closable="true"
            :visible="_singleShow"
            @close="onSingleClose"
            >
            <a-button slot="title" type="primary" @click="onSingleFinish">完成</a-button>
            <ysz-module-widget :title="_singleTitle">
                <ValidationObserver ref="singleOb" v-if="singleField">
                    <ValidationProvider style="width:100%" :name="_singleTitle" :rules="singleField.validate" v-slot="{ errors, validate }">
                        <tool-form-item ref="singleFormItem" slot="top" :disabled="_model_disabled.includes(singleField.field)" editing :value="dataform[singleField.form_key]" :option="singleField.option" :type="singleField.type" @change="(value) => {validate(value), onChange(value, singleField.form_key, singleField.on.change)}" :item="dataform"></tool-form-item>
                    </ValidationProvider>
                </ValidationObserver>
            </ysz-module-widget>
        </a-drawer>
    </component>
</template>

<style lang="scss" scoped>
    .tool-form-panel {background-color: unset !important;
        & .ant-collapse-item {
            border-bottom: unset !important;
        }
    }
</style>

<script>
import dayjs from "dayjs"
import utils from "./utils"
import httpConfig from "./http"
export default {
    name: 'toolForm',
    data(){
        return {
            singleShow: false,
            singleField: null,
            dataform: {},
            store: {
                fields: [],
                models: [],
                model: '',
                fieldData: {},
                progress: {},
                activeKey: [],
                moreShow: false,
            },
            _show: [],
            viewShow: false,
            loading: false
        }
    },
    props: {
        view: {
            type: Boolean,
            default:false
        },
        viewCol: {
            type: Number,
            default: 3
        },
        singleRequest: {
            type: Boolean,
            default:false
        },
        singlePop: {
            type: Boolean,
            default:false
        },
        singleRequestAloneField: {
            type: Boolean,
            default: true
        },
        viewEdit: {
            type: Boolean,
            default:false
        },
        showArrow: {
            type: Boolean,
            default:false
        },
        collapseDisabled: {
            type: Boolean,
            default: true
        },
        collapseOpen: {
            type: Boolean,
            default: true
        },
        show: {
            type: Boolean,
            default:false
        },
        noP: {
            type: Boolean,
            default:false
        },
        autoSet: {
            type: Array,
            default(){
                return []
            }
        },
        paramTransform: {
            type: Function,
            default: r => r
        },
        httpKey: {type: String, default: 'default'},
        layout: {
            type: Array,
            default: () => []
        },
        validateJustAlert: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        _singleTitle(){
            return this.singleField ? this.singleField.title : ""
        },
        _mores(){
            return this.store.fields.filter(field => !!field.more)
        },
        _hasMore(){
            return this._mores.length > 0
        },
        _edit(){
            // 平面模式且(展示或编辑模式)或非阅览模式
            return (this.view && (this.viewShow || this.viewEdit)) || !this.view
        },
        _box(){
            return !this.view ? "a-modal" : "div"
        },
        _layout(){
            let lays = []
            if(this.layout.length == 0) {
                lays = [{
                    key: "default",
                    col: this._model_layout_group,
                    fields: this._fields,
                    collapseDisabled: this.collapseDisabled,
                    collapseOpen: this.collapseOpen
                }]
            }else {
                lays = this.layout.map((lay, index) => {
                    lay.key = lay.key === undefined ? 'default' : lay.key
                    lay.fields = this._fields.filter(field => (!field.layout_key && index == 0) || (field.layout_key == lay.key))
                    lay.collapseDisabled = lay.collapseDisabled === undefined ? this.collapseDisabled : lay.collapseDisabled
                    lay.collapseOpen = lay.collapseOpen === undefined ? this.collapseOpen : lay.collapseOpen
                    return lay
                })
            }


            return lays
        },
        _has_option_remote_load(){
            return this.store.fields.some(f => !!f.meta.fetchUrl)
        },
        _hasModel(){
            return !!this._models[this.store.model]
        },
        _singleShow(){
            return !this.singlePop && this.singleShow
        },
        _models(){
            let tmp = {}

            this.store.models.forEach(v => {
                tmp[v.key] = v
            })

            return tmp
        },
        _current_model(){
            return this._hasModel ? this._models[this.store.model] : null
        },
        _current_ok_text() {
            return this._hasModel ? this._models[this.store.model].okText : '提交'
        },
        _current_cancel_text() {
            return this._hasModel ? this._models[this.store.model].cancelText : '取消'
        },
        _model_title(){
            return this._hasModel ? this._current_model.title : ''
        },
        _model_disabled(){
            if(this._hasModel) {
                return utils.getArrayFunction(this._current_model.disabled, [this._current_model, this.dataform])
            }else {
                return []
            }
        },
        _model_layout_group(){
            return this._current_model && this._current_model.layout_group ? this._current_model.layout_group : 2
        },
        _model_hide(){
            if(this._hasModel) {
                if(this._current_model.hide.length != 0) {
                    return !Array.isArray(this._current_model.hide) && this._current_model.hide == '*' ? Object.keys(this.dataform) : utils.getArrayFunction(this._current_model.hide, [this._current_model, this.dataform])
                }else {
                    let show = utils.getArrayFunction(this._current_model.show, [this._current_model, this.dataform])
                    return show.length == 0 ? [] : Object.keys(this.dataform).filter(v => !show.includes(v))
                }
            }else {
                return []
            }
        },
        _model_data(){
            // 只有汇集数据时根据form_key生成具体包含路径的数据
            // dataform 只存储path => value
            // _model_data: {a: {b: 1}}
            // dataform: {'a.b': 1}
            const fields = this.singleRequest && this.singleRequestAloneField && this.singleField ? [this.singleField] : this.store.fields
            if(this._hasModel) {
                if(Array.isArray(this._current_model.pick) && this._current_model.pick.length != 0) {
                    let keys = utils.getArrayFunction(this._current_model.pick, [this._current_model, this.dataform])
                    let tmp = {}
                    fields.forEach(field => {
                        if(keys.includes(field.form_key)) {
                            utils.set(tmp, field.form_key, this.filterFormat(field, this.dataform[field.form_key]))
                        }
                    })
                    return tmp
                }else {
                    let omit = utils.getArrayFunction(this._current_model.omit, [this._current_model, this.dataform])
                    let tmp = {}
                    
                    fields.forEach(field => {
                        if(!omit.includes(field.form_key)) {
                            utils.set(tmp, field.form_key, this.filterFormat(field, this.dataform[field.form_key]))
                        }
                    })
                    return tmp
                }
            }else {
                return {}
            }
        },
        _fieldMap(){
            let tmp = {}

            this.store.fields.forEach(v => {
                tmp[v.field] = v
            })
            return tmp
        },
        _has_xhr(){
            return this._hasModel && !!this._current_model.xhr.url
        },
        _key() {
            let ks = this.store.fields.filter(field => field.key)

            return ks.length > 0 ? ks[0].form_key : ''
        },
        _fields(){
            return this.store.fields.filter(v => {
                if(v.more && !this.store.moreShow) {
                    return false
                }
                return v.field && !this._model_hide.includes(v.form_key)
            })
        }
    },
    methods: {
        onMore(){
            this.store.moreShow = !this.store.moreShow
        },
        onCollapseChange(keys) {
            keys = Array.isArray(keys) ? keys : [keys]
            let alwaysOpenKeys = this._layout.filter(layout => !!layout.collapseOpen).map(layout => layout.key)
            let disKeys = this._layout.filter(layout => !!layout.collapseDisabled).map(layout => layout.key)
            disKeys.forEach((key, index) => {
                // 模拟disabled 但不用原生的disabled 因为原生的disabled带有disabled样式
                if(keys.includes(key)) {
                    // 如果一开始就关闭 则删掉
                    if(!alwaysOpenKeys.includes(key)) {
                        delete keys[index]
                    }
                }else {
                    // 如果一开始就开启 则填充
                    if(alwaysOpenKeys.includes(key)) {
                        keys.push(key)
                    }
                }
            })
            this.store.activeKey = keys
        },
        async onSingleFinish(){
            if(!await this.$refs.singleOb.validate()) {
                if(!this.validateJustAlert) {
                    return
                }else {
                    this.getNotifyEngine(this._current_model.xhr.notifyEngine).info("信息检测未通过请检查!")
                }
            }
            await this.do()
        },
        async onSinglePopFinish(field) {
            this.singleField = field
            if(!await this.$refs.ob.validate()) {
                if(!this.validateJustAlert) {
                    return
                }else {
                    this.getNotifyEngine(this._current_model.xhr.notifyEngine).info("信息检测未通过请检查!")
                }
            }
            await this.do()
            this.onSinglePopClose(field)
        },
        onSinglePopClose(field){
            field.popShow = false
        },
        onSingleClose(){
            this.singleShow = false
            this.singleField = null
        },
        onItemClick(field){
            if(this.singleRequest && field.editing && !this.singlePop) {
                this.singleField = field
                this.singleShow = true
                this.$nextTick(() => {
                    this.$refs.singleFormItem.focus()
                })
            }
        },
        filterFormat(field, v){
            if(field.type == "datetimepick") {
                return v.format(field.option.format)
            }else {
                return v
            }
        },
        onChange(value, field, cb){
            this.$set(this.dataform, field, value)
            this.$nextTick(() => {
                cb && cb(value, this.dataform)
            })
        },
        upload(file, field){
            let fd = new FormData()
            fd.append('file', file)
            return new Promise(async (ok) => {
                this.loading = true
                try {
                    let response = await this.$http.post(this._current_model.xhr.url + '/' + field.option.uploadApi, fd, {'Content-Type': 'multipart/form-data', onUploadProgress: progressEvent => {
                        this.$set(this.store.progress, field.field, (progressEvent.loaded / progressEvent.total * 100 | 0))
                    }})
                    this.loading = false
                    if(utils.http.responseOk(response)) {
                        this.$set(this.dataform[field.field], 0, response.data.path)
                        ok([response.data.path])
                    }else {
                        ok('')
                    }
                }catch(e) {
                    this.loading = false
                    ok('')
                }
            })
        },
        setFields(fields = []){
            let tmp = []
            fields.forEach(v => {
                let type = this.filterType(v.type)
                let option = v.option ? v.option : {}

                if(['select', 'radio'].includes(v.type)) {
                    option.valueKey = option.valueKey ? option.valueKey : 'value'
                    option.titleKey = option.titleKey ? option.titleKey : 'label'
                }

                let fk = v.form_key ? v.form_key : v.field
                let _default = utils.getTypeDefault(type, v.default, option)
                this.$set(this.dataform, fk, _default)

                tmp.push({
                    type,
                    title: v.title ? v.title : '未命名字段',
                    field: v.field,
                    editing: v.editing === undefined ? true : false,
                    default: _default,
                    option,
                    validate: v.validate ? v.validate : '',
                    help_msg: v.help_msg ? v.help_msg : '',
                    key: v.key === undefined ? false : v.key,
                    meta: v,
                    more: !!v.more,
                    form_key: fk,
                    popShow: false,
                    form_value_key: v.form_value_key ? v.form_value_key : v.field,
                    layout_key: v.layout_key,
                    placeholder: v.placeholder ? v.placeholder : "",
                    on: {
                        change: v.onChange ? v.onChange : null
                    }
                })
            });

            this.store.fields = tmp
        },
        async setModels(models = []){
            this.store.models = models.filter(v => !v.extend).map(v => {
                if(!v.disabled || !Array.isArray(v.disabled)) {
                    v.disabled = []
                }

                if(!v.show || !Array.isArray(v.show)) {
                    v.show = []
                }

                if(!v.hide && !Array.isArray(v.hide)) {
                    v.hide = []
                }

                v.xhr = Object.assign({url: '', method: 'get', autoClose: true, okMsg: 'ok~', notifyEngine: 'message', confirm: true, confirmMsg: '确认操作?'}, v.xhr)

                if(!v.pick) {
                    v.pick = []
                }

                if(!v.omit) {
                    v.omit = []
                }

                v.okText = v.okText ? v.okText : '提交'
                v.cancelText = v.cancelText ? v.cancelText : '取消'

                return v
            })

            await this.$nextTick()

            let tmp = models.filter(v => !!v.extend && this._models[v.extend] != undefined).map(v => {
                if(v.extendResolve) {
                    return v.extendResolve({}, this._models[v.extend], v)
                }else {
                    return Object.assign({}, this._models[v.extend], v)
                }
            })

            this.store.models.push(...tmp)
        },
        setModel(model){
            if(this._models[model]) {
                this.store.model = model
                this.$nextTick(() => {
                    this.store.activeKey = this._layout.filter(layout => !!layout.collapseOpen).map(layout => layout.key)
                })
            }
        },
        getModel(){
            return this.store.model
        },
        setData(data, validate = false){
            this.store.fields.forEach(field => {
                // 只根据field.field获取数据
                // dataform key 根据_mode_data 注释设置
                this.$set(this.dataform, field.form_key, utils.getTypeDefault(field.type, utils.get(data, field.field, field.default), field.option))
            })
            if(validate) {
                this.$nextTick(() => {
                    this.$refs.ob.validate()
                })
            }
        },
        filterType(type){
            return ["datetimepick", "checkbox", 'radio', 'string', 'switch', 'date', 'select', 'param', 'file', 'number', 'code', 'map', 'tag', 'customer', 'pick'].includes(type) ? type : 'string'
        },
        getNotifyEngine(type) {
            switch(type) {
                case 'message': 
                default: {
                    return this.$message
                }
            }
        },
        transform(params, method){
            let tmp = {...params}
            // auto set
            if(Object.keys(tmp).length > 0) {
                this.autoSet.forEach(s => {
                    tmp[s.option.labelKey] = this.$refs[s.field].getLabel()
                })
            }
            return tmp
        },
        async request(){
            let param = this._current_model.xhr.method == 'get' ? {params: this._model_data} : {payload: this._model_data}

            try {
                let sub = ''
                // put not include
                // put include key to body
                if(['delete', 'patch'].includes(this._current_model.xhr.method)) {
                    let ks = this.store.fields.filter(field => field.key)

                    if(ks.length > 0) {
                        sub = `/${this.dataform[this._key]}`
                    }
                }
                this.loading = true
                let hkObj = httpConfig.getEngine(this._current_model.xhr.httpKey ? this._current_model.xhr.httpKey : this.httpKey)
                let response = await hkObj.engine[this._current_model.xhr.method](
                    this._current_model.xhr.url + sub, this.paramTransform(this.transform(param)))
                this.loading = false

                if(utils.http.responseOk(response)) {
                    this.getNotifyEngine(this._current_model.xhr.notifyEngine).success(this._current_model.xhr.okMsg)
                    this.$emit('opearFinish', response)
                    if(this._current_model.xhr.autoClose) {
                        this.close()
                    }
                }else {
                    this.getNotifyEngine(this._current_model.xhr.notifyEngine).info(hkObj.errorMsgAdapter({response}))
                }
                return response
            } catch (error) {
                if(error.response && error.response.status == 422) {
                    this.getNotifyEngine(this._current_model.xhr.notifyEngine).error(httpConfig.errorMsgAdapter(error))
                }else {
                    this.getNotifyEngine(this._current_model.xhr.notifyEngine).error(httpConfig.errorMsgAdapter(error))
                }
                
                this.loading = false
                return error
            }
        },
        async do(){
            if(this._has_xhr) {
                if(this._current_model.xhr.confirm) {
                    this.$confirm({
                        title: this._current_model.xhr.confirmMsg ? this._current_model.xhr.confirmMsg : '确认?',
                        onOk: () => {
                            this.request()
                        },
                        onCancel() {
                            //todo
                        },
                        okText: '确定',
                        cancelText: '取消'
                    })
                }else {
                    this.$emit('opearFinish', await this.request())
                }
            }else {
                this.$emit('done', this._model_data)
            }
        },
        async okHandle(){
            if(!await this.$refs.ob.validate()) {
                this.getNotifyEngine(this._current_model.xhr.notifyEngine).info("信息检测未通过请检查!")
                if(!this.validateJustAlert) {
                    return
                }
            }

            await this.do()
            if(this._current_model.xhr.autoClose) {
                this.cancleHandle()
            }
        },
        cancleHandle(){
            !this.view ? this.close() : this.onViewHidden()
        },
        close(){
            this.$emit('update:show', false)
        },
        onViewShow(){
            this.viewShow = true
        },
        onViewHidden(){
            this.viewShow = false
        },
        getEmpty(type){
            switch(type){
                case 'tag': {
                    return []
                }break;
                case 'map': {
                    return {}
                }break;
                case 'date': {
                    return dayjs()
                }break;
                case 'switch': {
                    return false
                }break;
                case 'param': {
                    return []
                }break;
                case 'radio': {
                    return ''
                }break;
                case 'check': {
                    return []
                }break;
                case 'file': {
                    return []
                }break;
                case 'string':
                default: {
                    return ''
                }
            }
        },
        clean(){
            this.store.fields.forEach(field => {
                this.$set(this.dataform, field.form_key, field.default)
            })
        }
    }
}
</script>