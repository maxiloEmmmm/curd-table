<template>
    <div style="width:100%; text-align: left">
        <template v-if="editing">
            <component :is="_option.textarea ? 'a-textarea' : 'a-input'" style="width:100%" size="small" v-if="type == 'string'" :value="value" :disabled="disabled" @change="onChange" ref="input"></component>
            <tool-select size="small" :value="value" @change="onChange" 
                :options="_option.selectOptions" v-else-if="type == 'select'" 
                :disabled="disabled" 
                ref="input"
                style="width:100%"
                :style="{minWidth: _option.minSelectWidth}" 
                :filterOption="_option.selectFilter"></tool-select>
            <tool-pick size="small" :value="value" @change="onChange" 
                :options="_option.pickOptions" v-else-if="type == 'pick'" 
                :disabled="disabled" 
                ref="input"
                :searchKey="_option.searchKey"
                style="width:100%"
                :style="{minWidth: _option.minpickWidth}">
                <a-button size="small">{{_label}}</a-button>
            </tool-pick>
            <a-switch :checked-children="_option.checkText" :un-checked-children="_option.unCheckText" :disabled="disabled" ref="input" size="small" v-else-if="type == 'switch'" :checked="value" @change="onChange"></a-switch>
            <a-input-number style="width:100%" :disabled="disabled" ref="input" size="small" v-else-if="type == 'number'" :value="value" @change="onChange"></a-input-number>
            <emotion :disabled="disabled" v-else-if="type == 'component'" style="width:100%" @click="lanuchComponent"> 请选择</emotion>
            <tool-code :language="_option.language" style="width:100%" :disabled="disabled" ref="input" size="small" v-else-if="type == 'code'" :value="value" @change="onChange"></tool-code>
            <tool-map style="width:100%" :disabled="disabled" ref="input" size="small" v-else-if="type == 'map'" :value="value" @change="onChange"></tool-map>
            <tool-tag style="width:100%" :disabled="disabled" ref="input" size="small" v-else-if="type == 'tag'" :value="value" @change="onChange"></tool-tag>
            <component style="width:100%" :option="_option" :is="_option.customer_form" :disabled="disabled" ref="input" size="small" v-else-if="type == 'customer'" :value="value" @change="onChange"></component>
            <span v-else>
                {{ _label }}
            </span>
        </template>
        <template v-else>
            <span v-if="_normal_view">{{ _label }}</span>
            <emotion v-else-if="_switch_view" :type="value ? 'info' : 'danger'">{{ value ?  _option.checkText : _option.unCheckText }}</emotion>
            <span v-else-if="_param_view">
                <ysz-list :no-line="true">
                    <ysz-list-item v-for="v in value" :key="v.key" :left-item-end="true">
                        <emotion slot="left">{{ v.key }}</emotion>{{ v.value }}
                    </ysz-list-item>
                </ysz-list>
            </span>
            <span v-else-if="_file_view">
                <ysz-list :no-line="true">
                    <ysz-list-item v-for="(v, index) in value" :key="index" :left-item-end="true">
                        <emotion>{{ v }}</emotion>
                    </ysz-list-item>
                </ysz-list>
            </span>
            <span v-else-if="_map_view">
                <tw-list-item2 fit index indexBorder :items="Object.keys(value).map(item => {
                    return {
                        title: item,
                        desc: value[item]
                    }
                })">
                </tw-list-item2>
            </span>
            <span v-else-if="_tag_view">
                <tw-list-item1 fit index indexBorder :items="value.map(v => {
                    return {
                        title: v
                    }})"></tw-list-item1>
            </span>
        </template>
    </div>
</template>

<script>
import utils from "./utils"
export default {
    name: 'toolFormItem',
    data(){
        return {
            label: ""
        }
    },
    props: {
        type: {
            type: String,
            default: 'string',
            validator(value){
                return ['string', 'select', 'number', 'switch', 'code', 'map', 'tag', 'customer', 'pick'].includes(value)
            }
        },
        value: {
            default: '',
        },
        option: {
            type: Object,
            default: function () {
                return {}
            }
        },
        editing: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        item: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    // watch: {
    //     editing: {
    //         handler(){
    //             if(this.editing) {
    //                 this.$nextTick(() => {
    //                     this.$refs.input.focus()
    //                     switch(this.type) {
    //                         case 'string': {
    //                             this.$refs.input.$el.select()
    //                         }break;
    //                         case 'number': {
    //                             this.$refs.input.$el.querySelector('input').select()
    //                         }break
    //                     }
    //                 })
    //             }
    //         },
    //     }
    // },
    computed: {
        _option(){
            const option = {...this.option}
            switch (this.type) {
                case 'code': {
                    if(!option.language) {
                        option.language = "javascript"
                    }
                }break;
                case 'select': {
                    if(option.selectOptions === undefined || !Array.isArray(option.selectOptions)) {
                        option.selectOptions = utils.getType(option.selectOptions) == 'Function'
                                ? option.selectOptions(this.item) : []
                    }

                    if(option.autoFillEmpty === undefined) {
                        option.autoFillEmpty = true
                    }

                    if(option.autoFillEmpty) {
                        option.selectOptions = [{label: "请选择", value: ""}, ...option.selectOptions]
                    }

                    if(option.selectFilter === undefined || utils.getType(option.selectFilter) != 'Function') {
                        option.selectFilter = null
                    }
                    if(utils.getType(option.selectLabel) == 'Function') {
                        option.selectOptions = option.selectOptions.map(r => {
                            const x = {...r}
                            x.__COL_TRUE_LABEL__ = x.label
                            x.label = option.selectLabel(x)
                            return x
                        })
                    }

                    option.minSelectWidth = utils.getType(option.minSelectWidth) != 'String' || option.minSelectWidth.indexOf('px') == -1 ? '120px' : option.minSelectWidth
                }break;
                case 'pick': {
                    if(option.autoFillEmpty === undefined) {
                        option.autoFillEmpty = true
                    }

                    if(option.pickOptions === undefined || !Array.isArray(option.pickOptions)) {
                        option.pickOptions = utils.getType(option.pickOptions) == 'Function'
                                ? option.pickOptions(this.item) : []
                    }

                    if(option.autoFillEmpty) {
                        option.pickOptions = [{label: "请选择", value: ""}, ...option.pickOptions]
                    }
                    if(!option.searchKey) {
                        option.searchKey = []
                    }
                }break;
                case 'switch': {
                    if(option.checkText === undefined) {
                        option.checkText = '开'
                    }

                    if(option.unCheckText === undefined) {
                        option.unCheckText = '关'
                    }
                }break;
                default: {
                }
            }
            return option
        },
        _normal_view(){
            return ['string', 'date', 'check', 'radio', 'number', 'select', 'pick'].includes(this.type)
        },
        _map_view(){
            return this.type == 'map'
        },
        _switch_view(){
            return this.type == 'switch'
        },
        _param_view(){
            return this.type == 'param'
        },
        _file_view(){
            return this.type == 'file'
        },
        _tag_view(){
            return this.type == 'tag'
        },
        _customer_view(){
            return this.type == 'customer'
        },
        _label(){
            switch (this.type) {
                case 'select': {
                    let option = this._option.selectOptions.filter(r => r.value === this.value)[0]
                    if(!option) {
                        return ""
                    }

                    return this._option.selectLabel
                        ? option.__COL_TRUE_LABEL__ ? option.__COL_TRUE_LABEL__ : ''
                        : option.label
                }break;
                case 'pick': {
                    let option = this._option.pickOptions.filter(r => r.value === this.value)[0]
                    if(!option) {
                        return ""
                    }

                    return option.label
                }break;
                default: {
                    return this.value
                }
            }
        }
    },
    methods: {
        focus(){
            this.$refs.input.focus && this.$refs.input.focus()
            switch(this.type) {
                case 'string': {
                    this.$refs.input.$el.select()
                }break;
                case 'number': {
                    this.$refs.input.$el.querySelector('input').select()
                }break
            }
        },
        hide(){
            this.$refs.input.hide && this.$refs.input.hide()
        },
        onChange(value){
            switch (this.type) {
                case 'string': {
                    value = value.target.value
                }break;
                case 'pick': {
                    value = value.value
                }break;
                default: {
                }
            }
            this.$emit('change', value)
        },
        getLabel(){
            return this._label
        }
    }
}
</script>