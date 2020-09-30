<template>
    <a-popover trigger="click" placement="bottomLeft" v-model="visible" :auto-adjust-overflow="false">
        <ysz-list-item slot="title" :left="true">
            <span slot="left">{{ title }}</span>
            <a-button style="margin-left:5px" @click="stop"> 关闭</a-button>
        </ysz-list-item>
        <template slot="content">
            <ysz-list-item :left="true">
                <ysz-list-item :no-p="true" slot="left">
                    <span slot="left" style="padding-right:5px">过滤: </span>
                    <a-input size="small" @pressEnter="onSearch" v-model="search_value" :allowClear="true"/>
                </ysz-list-item>
                <a-button size="small" type="primary" style="margin-left:5px" @click="onSearch"> 查询</a-button>
                <a-button size="small" style="margin-left:5px" @click="clear"> 清空</a-button>
            </ysz-list-item>
            <a-divider size="small" style="margin: 12px 0 9px"></a-divider>
            <ysz-list-item :start="true">
                <a-pagination size="small" :hideOnSinglePage="true" :pageSize="pageSize" v-model="current" :total="_total" show-less-items slot="left" />
                <ysz-list :row="true" :no-line="false" :group="group">
                    <a-tag :color="item.value === value ? '#f50' : null" @click="() => onClick(item)" v-for="item in _views" :key="item.value">
                        {{ item.label }}
                    </a-tag>
                </ysz-list>
            </ysz-list-item>
        </template>
        <div style="cursor:pointer;display:flex"><slot></slot></div>
    </a-popover>
</template>

<style lang="scss" scoped>
    .ant-pagination {display: flex; flex-direction: column;
        &::v-deep li {margin-bottom: 8px; margin-right: 0;}
    }
</style>

<script>
export default {
    name: 'tool-pick',
    props: {
        title: {
            type: String,
            default: '请选择'
        }, 
        options: {
            default(){
                return []
            },
            type: Array
        },
        searchKey: {
            default(){
                return ['label']
            },
            type: Array
        },
        group: {
            default: 4,
            type: Number
        },
        pick: ''
    },
    watch: {
        pick(val){
            this.clear(val)
        }
    },
    computed: {
        _views(){
            let start = (this.current - 1)  * this.pageSize
            let end = start + this.pageSize
            end = end > this._total ? this._total : end 
            return this._items.slice(start, end)
        },
        _items(){
            return this.search 
                    ? this._options.filter(v => v.__SEARCH__.indexOf(this.search) > -1)
                    : this._options
        },
        _options(){
            return this.options.map(r => {
                r.__SEARCH__ = Object.keys(r).filter(k => this.searchKey.includes(k))
                        .map(k => r[k]).join('_')
                return r
            })
        },
        _total(){
            return this._items.length
        }
    },
    data(){
        let pageSize = this.$props.group * 12
        
        return {
            search: '',
            visible: false,
            value: this.$props.pick,
            search_value: '',
            current: 1,
            pageSize
        }
    },
    methods: {
        onSearch(){
            this.current = 1
            this.search = this.search_value
        },
        onClick(item){
            this.$emit('change', item)
            this.visible = false
            this.value = item.value
        },
        setValue(value){
            this.value = value
            let tmp = this._items.filter(c => c.value === value)[0]
            this.$emit('change', tmp ? tmp : {label: '', value: ''})
        },
        clear(value = ''){
            this.search = ''
            this.search_value = ''
            this.current = 1
            this.setValue(value)
        },
        stop() {
            this.visible = false
        }
    }
}
</script>