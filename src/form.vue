<template>
    <a-modal
        width="80%"
        :closable="false"
        :visible="show">
        <span slot="title">{{ _model_title }}</span>
        <a-spin :spinning="loading">
            <ValidationObserver ref="ob">
                <template v-for="layout in _layout">
                    <ysz-list :no-line="false" :row="true" :group="layout.col" :key="layout.key">
                        <ValidationProvider style="width:100%" :key="field.field" v-for="(field) in layout.fields" :name="field.title" :rules="field.validate" v-slot="{ errors, validate }">
                            <ysz-list-item-top>
                                <ysz-list-item slot="top">
                                    <span slot="left">{{ `${field.title}${field.type == 'code' ? `(${field.option.language})` : ''}` }}</span>
                                    <a-badge v-show="errors.length" status="warning" :text="errors[0]" />
                                </ysz-list-item>
                                <ysz-list-item-top>
                                    <tool-form-item slot="top" :ref="field.field" :disabled="_model_disabled.includes(field.field)" :editing="true" :value="dataform[field.form_key]" :option="field.option" :type="field.type" @change="(value) => {validate(value), onChange(value, field.form_key)}" :item="dataform"></tool-form-item>
                                    <tw-alert style="text-align:left" mini left v-if="field.help_msg" :title="field.help_msg" type="info" show-icon />
                                </ysz-list-item-top>
                            </ysz-list-item-top>
                        </ValidationProvider>
                    </ysz-list>
                </template>
            </ValidationObserver>
        </a-spin>
        <ysz-list-item slot="footer" :left="true">
            <a-button @click="cancleHandle">取消</a-button>
            <a-button type="primary" @click="okHandle">提交</a-button>
        </ysz-list-item>
    </a-modal>
</template>

<script>
import dayjs from "dayjs"
import utils from "./utils"
import httpConfig from "./http"
export default {
    name: 'toolForm',
    data(){
        return {
            dataform: {},
            store: {
                fields: [],
                models: [],
                model: '',
                fieldData: {},
                progress: {}
            },
            _show: [],
            loading: false
        }
    },
    props: {
        show: {
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
        }
    },
    computed: {
        _layout(){
            if(this.layout.length == 0) {
                return [{
                    key: "default",
                    col: this._model_layout_group,
                    fields: this._fields
                }]
            }else {
                return this.layout.map((lay, index) => {
                    lay.fields = this._fields.filter(field => (!field.layout_key && index == 0) || (field.layout_key == lay.key))
                    return lay
                })
            }
        },
        _has_option_remote_load(){
            return this.store.fields.some(f => !!f.meta.fetchUrl)
        },
        _hasModel(){
            return !!this._models[this.store.model]
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
            if(this._hasModel) {
                if(Array.isArray(this._current_model.pick) && this._current_model.pick.length != 0) {
                    let keys = utils.getArrayFunction(this._current_model.pick, [this._current_model, this.dataform])
                    let tmp = {}
                    this.store.fields.forEach(field => {
                        if(keys.includes(field.form_key)) {
                            utils.set(tmp, field.form_key, this.dataform[field.form_key])
                        }
                    })
                    return tmp
                }else {
                    let omit = utils.getArrayFunction(this._current_model.omit, [this._current_model, this.dataform])
                    let tmp = {}
                    
                    this.store.fields.forEach(field => {
                        if(!omit.includes(field.form_key)) {
                            utils.set(tmp, field.form_key, this.dataform[field.form_key])
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
            return this.store.fields.filter(v => v.field && !this._model_hide.includes(v.form_key))
        }
    },
    methods: {
        onChange(value, field){
            this.$set(this.dataform, field, value)
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
                    default: _default,
                    option,
                    validate: v.validate ? v.validate : '',
                    help_msg: v.help_msg ? v.help_msg : '',
                    key: v.key === undefined ? false : v.key,
                    meta: v,
                    form_key: fk,
                    form_value_key: v.form_value_key ? v.form_value_key : v.field,
                    layout_key: v.layout_key
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
            }
        },
        getModel(){
            return this.store.model
        },
        setData(data){
            this.store.fields.forEach(field => {
                // 只根据field.field获取数据
                // dataform key 根据_mode_data 注释设置
                this.$set(this.dataform, field.form_key, utils.getTypeDefault(field.type, utils.get(data, field.field, field.default), field.option))
            })
        },
        filterType(type){
            return ['string', 'switch', 'date', 'select', 'param', 'file', 'number', 'code', 'map', 'tag', 'customer', 'pick'].includes(type) ? type : 'string'
        },
        getNotifyEngine(type) {
            switch(type) {
                case 'message': 
                default: {
                    return this.$message
                }
            }
        },
        transform(params){
            let tmp = {...params}
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
        async okHandle(){
            if(!await this.$refs.ob.validate()) {
                this.getNotifyEngine(this._current_model.xhr.notifyEngine).info("信息检测未通过请检查!")
                return
            }

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
                if(this._current_model.xhr.autoClose) {
                    this.close()
                }
                this.$emit('done', this._model_data)
            }
        },
        cancleHandle(){
            this.close()
        },
        close(){
            this.$emit('update:show', false)
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