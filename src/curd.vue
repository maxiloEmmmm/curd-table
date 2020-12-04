<script>
import utils from './utils'
import httpConfig from "./http"
export default {
    name: 'toolCurd',
    render(){
        const {$scopedSlots} = this
        
        return <ysz-module-card>
                <tool-form layout={this.layout} httpKey={this.httpKey} vOn:done={this.opearDone} vOn:opearFinish={this.opearFinish} show={this.show} paramTransform={this.paramTransform} on={{"update:show": v => this.show = v}} ref="ywSettingBase"></tool-form>
                {this.title || $scopedSlots.title ? <span slot="title">{ this.title ? this.title : $scopedSlots.title()   }</span> : null}
                {$scopedSlots.top && $scopedSlots.top() }
                {this.fetchUrl && !this.preview
                    ? <tw-emotion size="small" class="action-btn action-btn__top" vOn:click={e => this.refresh()}>刷新</tw-emotion>
                    : null}
                {this._dispatchTop.map((action, index) => <tw-emotion size="small" class="action-btn action-btn__top" vOn:click={ e => this.onTopAction(action)} key={index}>{ action.title }</tw-emotion>)}
                {this._has_filter 
                    ? <ysz-list row>
                        {this._filter.map((filter) => 
                            <ysz-list-item-top>
                                <ysz-list-item key={filter.filterKey} class="h-full" slot="top">
                                    <span slot="left">{ filter.label }</span>
                                    <tool-form-item value={this.store.filter[filter.filterKey]} editing type={filter.type} vOn:change={value => this.onFilter(value, filter.filterKey)} option={filter.option}></tool-form-item>
                                </ysz-list-item>
                                {filter.help_msg ? <tw-alert style="text-align:left" mini left title={filter.help_msg} type="info" show-icon /> : null}
                            </ysz-list-item-top>
                        )}
                        <ysz-list-item>
                            <tw-emotion size="small" vOn:click={e => this.refresh()} type="primary" slot="left"> 搜索</tw-emotion>
                            <tw-emotion size="small" vOn:click={e => this.clearFilter()} type="info"> 重置</tw-emotion>
                        </ysz-list-item>
                    </ysz-list>
                    : null}
                
                <div style="display: flex">
                    {this._has_left_view
                        ? <div style="flex: 0 0 auto">{$scopedSlots.left()}</div>
                        : null}
                    <div style="flex: 1 1 auto">
                        <ysz-fetch-wrap engine={this._httpEngine} ref="datawrap" url={this._fetchUrl} errHandler={this.fetchErr} handler={this.render} page={this.store.page} pageKey="page" size={this.store.page_size}>
                            <a-table class="curd-core-table" rowKey={this.store.rowKey} size="small" vOn:change={(page, sorter, filter) => this.pageRender(page, sorter, filter)} dataSource={this._tdata} columns={this._columns} bordered={true} pagination={this.pagination}></a-table>
                        </ysz-fetch-wrap>
                    </div>
                    {this._has_right_view
                        ? <div style="flex: 0 0 auto">{$scopedSlots.right()}</div>
                        : null}
                </div>

                {this._has_footer_view
                    ? <div style="flex: 0 0 auto">{$scopedSlots.footer()}</div>
                    : null}
            </ysz-module-card>
    },
    props: {
        title: {type: String, default: ''},
        fetchUrl: {type: String, default: ''},
        columns: {type: Array, default(){return []}},
        models: {type: Array, default(){return []}},
        actionNewRow: {type: Boolean, default: false},
        actionEditRow: {type: Boolean, default: false},
        actionEditFilter:{default(r){return r},type: Function },
        paramTransform:{default(r){return r},type: Function },
        queryParams: {type: Object, default(){return {}}},
        pageSize: {type: Number, default: 10},
        fetchTransform: {default(r){return r},type: Function },
        dataSource: {type: Array, default: () => []},
        httpKey: {type: String, default: 'default'},
        preview: {type: Boolean, default: false},
        layout: {
            type: Array,
            default: () => []
        }
    },
    data(){
        this.$nextTick(() => {
            let userdata = Array.isArray(this.$props.dataSource) ? this.$props.dataSource : []
            this.store.tableData = [...this.store.tableData, ...userdata.map(this.transformData)]
            this.store.page_count = this.store.tableData.length
        })
        return {
            show: false,
            store: {
                colEditKey: utils.random('curd-edit-'),
                rowKey: utils.random('curd-row-key-'),
                edit: {
                    key: 0,
                    field: 0,
                    ing: false
                },
                page: 1,
                page_count: 0,
                page_size: this.$props.pageSize,
                tableData: [],
                relations: [],
                editKey: -1,
                editModelKey: '__EDIT__',
                editModeTitle: '编辑',
                tmpeditcellvalue: '',
                filter: {},
                sort: {}
            }
        }
    },
    computed: {
        _httpEngine(){
            return httpConfig.getEngine(this.httpKey).engine
        },
        _tdata(){
            if(this.fetchUrl) {
                return this.store.tableData
            }
            let s = (this.store.page - 1) * this.store.page_size
            return this.store.tableData.slice(s, s + this.store.page_size)
        },
        _has_filter(){return this._filter.length > 0},
        _filter(){
            return this._format_columns.filter(f => f.filter).map(f => {
                return {
                    label: f.title,
                    ...f,
                    filterKey: f.filterKey ? f.filterKey : f.field,
                    type: f.filterType ? f.filterType : f.type,
                    help_msg: f.filter_help_msg
                }
            })
        },
        _fetchUrl(){
            if(!this.fetchUrl) {
                return ''
            }
            let urlInfo = this.fetchUrl.split("?")
            let path = urlInfo[0], query = urlInfo[1]
            let querys = utils.parseURL(query)
            let filters = this._filter.filter(f => {
                    let tmp = this.store.filter[f.filterKey]
                    if(tmp === undefined) return false
                    if(f.filterWithoutEmpty) {
                        return !!tmp
                    }
                    return true
                }
            ).forEach(f => {
                querys[f.filterKey] = encodeURIComponent(this.store.filter[f.filterKey])
            })
            if(Object.keys(this.store.sort).length > 0) {
                querys.sort = Object.keys(this.store.sort).map(f => `${f},${this.store.sort[f]}`).join('|')
            }
            Object.assign(querys, {...this.queryParams})
            return path + "?" + Object.keys(querys).map(query => `${query}=${querys[query]}`).join("&")
        },
        pagination(){
            return this.preview ? false : {
                current: this.store.page,
                total: this.store.page_count,
                pageSize: this.store.page_size,
                hideOnSinglePage: false,
                showTotal: (total, range) => `第${range[0]}-${range[1]}条 共${total}条记录`,
                showSizeChanger: true
            }
        },
        _dispatchTop(){
            return this._models.filter(v => v.dispatchArea == 'topBar')
        },
        _dispatchRow(){
            let row = this._modelBaseAction.map(v => {
                v.type = v.type ? v.type : 'action'
                return v
            })

            row.push(...this.store.relations.map(v => utils.set(v, 'type', 'relation')))

            if(this.actionNewRow) {
                row.push({title: '+', api: 'new-row', type: 'api'})
            }

            if(this.actionEditRow) {
                row.push({title: this.store.editModeTitle, api: 'edit-row', type: 'api'})
            }

            return row
        },
        _modelBaseAction(){return this._format_models.filter(v => v.dispatchArea == 'rowBar' && !v.hidden)},
        _hasAction(){return this._modelBaseAction.length > 0 || this._hasApiAction},
        _hasApiAction(){
            return this.actionNewRow || this.actionEditRow
        },
        _format_columns(){
            return this.columns.map(c => {
                c.option = c.option ? c.option : {}
                c.edit = Object.assign({enable: false}, c.edit)
                c.dataIndex = c.field
                c.customRender = c.customRender ? c.customRender : (text, item, index, a) => {
                    const h = this.$createElement
                    return {
                        children: h('tool-form-item', {
                            props: {
                                // editing: item[this.store.colEditKey][c.field], 
                                editing: c.edit.enable,
                                value: utils.get(item, c.field), 
                                option: c.option, 
                                type: c.type,
                                autoSet: this._auto_set,
                                item
                            },
                            ref: `edit-ref-${index}-${c.field}`,
                            on: {
                                change: value => {
                                    if(c.edit.enable) {
                                        this.saveCell(c.field, this.getRowKey(item), value)
                                    }
                                }
                            }
                        })
                    }
                }
                c.customCell = (record, index) => {
                    return {on: {click: () => {
                        c.edit.enable && this.entryCell(c.field, this.getRowKey(record))
                    }}}
                }
                c.align = c.align ? c.align : 'center'
                c.hidden = c.hidden === undefined ? false : c.hidden
                c.sorter = c.sort ? (a, b) => 1 : null
                c.type = c.type ? c.type : "string"
                return c
            })
        },
        _form_columns(){
            return this._format_columns.filter(f => !!f.field)
        },
        _columns(){
            let c = [...this._format_columns.filter(c => !c.hidden)]

            if(this._hasAction) {
                c.push({
                    title: '操作',
                    align: 'center',
                    tdSlot: '__action',
                    customRender: (text, item, index) =>
                        <a-space>
                        {this._dispatchRow.map((row, _i) => 
                            <a-button 
                                size="small"
                                v-show={!row.filter || row.filter(item)}
                                key={_i}
                                class={{
                                    'action-btn': true,
                                    'action-btn__row-relation': row.type == 'relation'
                                }}
                                vOn:click={e => this.onRowAction(row, item, index)}>
                                {row.title}</a-button>
                        )}</a-space>
                })
            }

            return c
        },
        _columns_key(){
            return utils.keyby(this._format_columns, 'field')
        },
        _format_models(){
            return this.models.map(f => {
                if(f.type === undefined) {
                    f.type = 'action'
                }

                if(f.type == 'action' && f.key === undefined) {
                    f.key = utils.random("action_key-")
                }
                if(f.xhr) {
                    f.xhr.url = f.xhr.url ? f.xhr.url : this.fetchUrl
                    f.xhr.okMsg = f.xhr.okMsg ? f.xhr.okMsg : 'ok~'
                }
                f.dispatchArea = f.dispatchArea ? f.dispatchArea : 'rowBar'
                return f
            })
        },
        _models(){
            let m = [...this._format_models]
            if(this.actionEditRow) {
                m.push({
                    title: this.store.editModeTitle,
                    key: this.store.editModelKey,
                    show: this._format_columns.filter(c => c.edit.enable).map(c => c.field),
                    disabled: this._format_columns.filter(c => c.disabled).map(c => c.field)
                })
            }

            return m
        },
        _has_left_view(){
            return !!this.$slots.left
        },
        _has_right_view(){
            return !!this.$slots.right
        },
        _has_footer_view(){
            return !!this.$slots.footer
        },
        _auto_set(){
            return this._format_columns.filter(c => c.type == 'select' && c.option.labelKey)
        }
    },
    mounted(){
        document.addEventListener('keyup', (e) => {
            switch(e.code) {
                case 'Tab': {
                    // if(this.store.edit.ing) {
                        if(!e.shiftKey) {
                            this.editNextCell()
                        }else {
                            this.editPrevCell()
                        }
                    // }
                }break;
                case 'NumpadEnter':
                case 'Enter': {
                    // if(this.store.edit.ing) {
                        this.editNextCell()
                    // }
                }break;
                case 'Escape': {
                    // if(this.store.edit.ing) {
                        this.closeEdit(this.store.edit.field, this.store.edit.key)
                    // }
                }
            } 
        })

        this.$refs.ywSettingBase.setFields(this._form_columns)
        this.$refs.ywSettingBase.setModels(this._models)
    },
    methods: {
        fetchErr(e){
            console.log(e)
        },
        clearFilter(){
            this.store.filter = {}
            this.refresh()
        },
        onFilter(value, field){
            this.$set(this.store.filter, field, value)
        },
        editNextCell(){
            let fieldIndex = this._format_columns.findIndex(f => f.field == this.store.edit.field)
            let nfi = this._format_columns.findIndex((f, i) => i > fieldIndex && f.edit.enable)
            const cdata = [...this.store.tableData]
            if(nfi != -1) {
                this.entryCell(this._format_columns[nfi].field, this.store.edit.key)
            }else {
                let index = this.store.tableData.findIndex(r => r[this.store.rowKey] == this.store.edit.key)
                index = index + 1
                if(index > this.store.tableData.length - 1) {
                    this.apiNewRow()
                    this.$nextTick(() => {
                        let firstEditField = this._format_columns.filter(f => f.edit.enable && f.field)[0]
                        this.entryCell(firstEditField.field, this.getRowKey(this.store.tableData[index]))
                    })
                }else {
                    let firstEditField = this._format_columns.filter(f => f.edit.enable && f.field)[0]
                    this.entryCell(firstEditField.field, this.getRowKey(this.store.tableData[index]))
                }
            }
        },
        editPrevCell(){
            let fieldIndex = this._format_columns.findIndex(f => f.field == this.store.edit.field)
            let nfi = -1
            for(let j = fieldIndex-1; j >= 0; j--) {
                if(this._format_columns[j].edit.enable) {
                    nfi = j
                    break;
                }
            }
            const cdata = [...this.store.tableData]
            if(nfi != -1) {
                this.entryCell(this._format_columns[nfi].field, this.store.edit.key)
            }else {
                let index = this.store.tableData.findIndex(r => r[this.store.rowKey] == this.store.edit.key)
                index = index - 1
                if(index < 0) {
                    this.closeEdit(this.store.edit.field, this.store.edit.key)
                    return
                }
            }
        },
        setEditTmpValue(value) {
            this.store.tmpeditcellvalue = value
        },
        entryCell(field, key){
            if(this.store.edit.ing) {
                this.closeEdit(this.store.edit.field, this.store.edit.key)
            }

            const cdata = [...this.store.tableData]
            this.store.edit.field = field
            this.store.edit.key = key
            const target = cdata.filter(item => key === item[this.store.rowKey])[0]
            let index = cdata.findIndex(item => key === item[this.store.rowKey])
            index = index % this.store.page_size
            target[this.store.colEditKey][field] = this.store.edit.ing = true
            this.$refs[`edit-ref-${index}-${field}`].focus()
            this.store.tableData = cdata
            this.setEditTmpValue(this.store.tableData.filter(item => key === item[this.store.rowKey])[0][field])
        },
        saveCell(field, key, value){
            // if(value === this.store.tmpeditcellvalue) {
            //     return
            // }
            const cdata = [...this.store.tableData]
            const item = cdata.filter(item => key === this.getRowKey(item))[0]
            item[field] = value
            //old Object.assign(item, this.editFilter(key, item))
            let fi = this._format_columns.filter(r => r.field == field)[0]
            //old this.change(this.store.tableData)
            if(fi.edit.cellHandler) {
                fi.edit.cellHandler(key, item)
            }
            Object.assign(item, this.editFilter(key, item))
            this.store.tableData = cdata
            this.change(this.store.tableData)
        },
        cancleEdit(field, key){
            this.saveCell(field, key, this.store.tmpeditcellvalue)
            this.closeEdit(field, key)
        },
        closeEdit(field, key){
            const cdata = [...this.store.tableData]
            this.store.edit.field = ''
            this.store.edit.key = ''
            const target = cdata.filter(item => key === item[this.store.rowKey])[0]
            target[this.store.colEditKey][field] = this.store.edit.ing = false
            let index = cdata.findIndex(item => key === item[this.store.rowKey])
            index = index % this.store.page_size
            this.$refs[`edit-ref-${index}-${field}`].hide()
            this.store.tableData = cdata
        },
        async refresh(){
            this.store.tableData = []
            this.store.page_count = 0
            await this.$nextTick()
            this.$refs.datawrap.fetch();
        },
        opearFinish(){
            this.refresh()
        },
        async pageRender(page, sorter, filter){
            if(sorter.column) {
                this.$set(this.store.sort, sorter.column.field, sorter.order)
            }else {
                this.store.sort = {}
            }
            this.store.page = page.current
            this.store.page_size = page.pageSize
            await this.$nextTick()
            this.$refs.datawrap.fetch()
        },
        async render(response){
            if(utils.http.responseOk(response)) {
                response = await this.fetchTransform(response)
                this.store.tableData = response.data.data.map(this.transformData)
                this.store.page_count = response.data.total
                this.change(this.store.tableData)
            }else {
                this.$message.warn(response.data.msg)
            }
        },
        onTopAction(action){
            switch(action.type) {
                case 'action': {
                    this.onAction(action)
                }break;
                case 'api': {
                    switch(action.api) {
                        case 'event': {
                            this.$emit(action.key, this.store.tableData)
                        }
                    }
                }
            }
        },
        getRowKey(item) {
            return item[this.store.rowKey]
        },
        getRow(key) {
            const cdata = [...this.store.tableData]
            return cdata.filter(item => key === item[this.store.rowKey])[0]
        },
        onRowAction(action, item, index){
            switch(action.type) {
                case 'relation': {
                    this.$router.push({ path: `${this.$route.fullPath}/${item[action.primaryKey]}/${action.key}` })
                }break;
                case 'action': {
                    this.onAction(action, item)
                }break;
                case 'api': {
                    switch(action.api) {
                        case 'new-row': {
                            this.apiNewRow(this.getRowKey(item))
                        }break;
                        case 'edit-row': {
                            this.store.editKey = this.getRowKey(item)
                            this.onAction({key: this.store.editModelKey}, item)
                        }break;
                        case 'event': {
                            this.$emit(action.key, {item, rawItem: this.getRaw(item), key: this.getRowKey(item), table: this})
                        }
                    }
                }
            }
        },
        getRaw(item){
            let obj = {...item}
            delete obj[this.store.colEditKey]
            delete obj[this.store.rowKey]
            return obj
        },
        autoSet(key, item){
            let tmp = {...item}
            const cdata = [...this.store.tableData]
            this._auto_set.forEach(s => {
                let index = cdata.findIndex(item => key === this.getRowKey(item))
                tmp[s.option.labelKey] = this.$refs[`edit-ref-${index}-${s.field}`].getLabel()
            })
            return tmp
        },
        editFilter(key, data){
            let item = {...data}
            Object.assign(item, this.actionEditFilter(item))
            return item
        },
        opearDone(data){
            let model = this.$refs.ywSettingBase.getModel()
            if(this.actionEditRow && model == "edit-row") {
                Object.assign(data, this.editFilter(this.store.editKey, data))
                const cdata = [...this.store.tableData]
                const target = cdata.filter(item => this.store.editKey === this.getRowKey(item))[0]
                Object.keys(data).forEach(k => {
                    target[k] = data[k]
                })

                this.store.tableData = cdata
                this.change(this.store.tableData)
            }else {
                this.$emit(model, data)
            }
        },
        apiDeleteRow(key) {
            let index = this.store.tableData.findIndex(r => this.getRowKey(r) === key)
            this.store.tableData.splice(index, 1)
            this.change(this.store.tableData)
        },
        apiNewRow(num = 1, key = -1){
            let cs = {}
            this._columns.forEach(f => {
                f.type && (cs[f.field] = utils.getTypeDefault(f.type, f.default, f.option || {}))
            })

            let index = this.store.tableData.findIndex(r => this.getRowKey(r) === key)
            index = index < 0 ? this.store.tableData.length : index
            index = index+1
            for(let k = 0; k < num; k++) {
                this.store.tableData.splice(index+k, 0, this.transformData({...cs}))
            }
        },
        apiAppend(item, key = -1) {
            let index = this.store.tableData.findIndex(r => this.getRowKey(r) === key)
            index = index < 0 ? this.store.tableData.length : index
            index = index+1
            this.store.tableData.splice(index > -1 ? index : this.store.tableData.length, 0, this.transformData({...item}))
            this.change(this.store.tableData)
        },
        apiAppends(items, key = -1) {
            let index = this.store.tableData.findIndex(r => this.getRowKey(r) === key)
            index = index < 0 ? this.store.tableData.length : index
            index = index+1
            items.forEach((item, i) => this.store.tableData.splice(index+i, 0, this.transformData({...item})))
            this.change(this.store.tableData)
        },
        setRowItem(item = {}) {
            let index = this.store.tableData.findIndex(r => this.getRowKey(r) === this.getRowKey(item))
            this.store.tableData[index] = this.transformData({...this.store.tableData[index], ...item})
            this.change(this.store.tableData)
        },
        setRow(key, item = {}) {
            let index = this.store.tableData.findIndex(r => this.getRowKey(r) === key)
            this.store.tableData[index] = this.transformData({...this.store.tableData[index], ...item})
            this.change(this.store.tableData)
        },
        onAction(action, item = {}){
            this.show = true
            this.$refs.ywSettingBase.setModel(action.key)

            if(action.dispatchReset) {
                this.$refs.ywSettingBase.clean()
            }else {
                this.$refs.ywSettingBase.setData(item)
            }
        },
        transform(cb){
            this.store.tableData = this.store.tableData.map((v, i, arr) => {
                return this.editFilter(this.getRowKey(v), cb(v, i, arr))
            })
            this.change(this.store.tableData)
        },
        transformData(data) {
            if(data[this.store.colEditKey] === undefined) {
                data[this.store.colEditKey] = {}
                this._format_columns.filter(f => !!f.field).forEach(f => {
                    data[this.store.colEditKey][f.field] = false
                })
            }
            if(data[this.store.rowKey] === undefined) {
                data[this.store.rowKey] = utils.random('rowkey-')
            }
            data = this.editFilter(data[this.store.rowKey], data)
            return data
        },
        clear(){
            this.store.edit = {
                key: 0,
                field: 0,
                ing: false
            }
            this.store.tableData = []
            this.change()
        },
        change(v = []){
            v = v || []
            this.$emit('change', v)
        },
        getData(withlabel = false){
            return this.store.tableData.map(r => {
                let tmp = {...r}
                Object.assign(tmp, this.autoSet(this.getRowKey(tmp), tmp))
                this._format_columns.filter(f => !!f.field).forEach(f => {
                    if(!withlabel) {
                        switch(f.type){
                            case 'select': {
                                tmp[f.field] = r[f.field]
                            }break;
                            default: {
                                tmp[f.field] = r[f.field]
                            }
                        }
                    }else {
                        tmp[f.field] = r[f.field]
                    }
                })

                return tmp
            })
        },
        getCurrentPage(){
            return this.store.page
        },
        getPageSize(){
            return this.pageSize
        },
        getPageData(){
            let start = (this.store.page - 1) * this.pageSize
            let end = (start + this.pageSize) > this.store.tableData.length ? this.store.tableData.length : (start + this.pageSize)
            return this.store.tableData.slice(start, end).map(r => {
                let tmp = {...r}
                Object.assign(tmp, this.autoSet(this.getRowKey(tmp), tmp))
                this._format_columns.filter(f => !!f.field).forEach(f => {
                    tmp[f.field] = r[f.field]
                })

                return tmp
            })
        }
    }
}
</script> 

<style lang="scss" scoped>
    .action-btn {
        margin-right: 8px;

        &.action-btn__top {
            margin-bottom: 12px;
        }

        &.action-btn__row-relation {background-color: #10ddc2; color: #fff}
    }
</style>

<style lang="scss">
  .mini-tool-curd {
    .ant-table {line-height: 1.5; font-size:14px}
    .ant-table tbody td {padding-top: 4px !important; padding-bottom: 4px!important;}
  }
</style>