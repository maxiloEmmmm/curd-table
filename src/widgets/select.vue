<template>
    <a-select dropdownMatchSelectWidth ref="core" :disabled="disabled" :autoFocus="autoFocus" :show-search="!!filterOption" :filterOption="filterOption" :labelInValue="labelInValue" size="small" style="width:100%" v-model:value="v" @change="onChange">
        <a-select-option :value="option.value" :key="option.value" v-for="option in options">{{ option.label }}</a-select-option>
    </a-select>
</template>

<script lang="jsx">
import utils from "../utils"
export default {
    name: 'toolSelect',
    props: {
        value: {
            default: '',
            type: [Number, String]
        },
        autoFocus: {
            default: false,
            type: Boolean
        },
        labelInValue: {
            default: false,
            type: Boolean
        },
        disabled: {
            default: false,
            type: Boolean
        },
        options: {
            default(){
                return []
            },
            type: Array
        },
        filterOption: {
            type: [Function],
            default(){
                return null
            },
        },
    },
    watch: {
        value: {
            handler(){
                this.v = this.value
                if(this.options && this.options.length > 0) {
                    let val = this.options.filter(option => option.value === this.v)[0]
                    if(val === undefined) {
                        this.v = ""
                        this.onChange()
                    }
                }
            },
            deep: true
        },
        options: {
            handler(){
                let val = this.options.filter(option => option.value === this.v)[0]
                if(val === undefined) {
                    this.v = ""
                    this.onChange()
                }
            },
            deep: true
        }
    },
    data(){
        const value = utils.getType(this.$props.value) === 'Undefined' ? "" : this.$props.value;
        value !== this.$props.value && this.$emit('change', value)
       
        return {v: value}
    },
    emits: ['change'],
    methods: {
        onChange(v){
            this.$emit('change', this.labelInValue ? {value: v.key, ...v} : this.v)
        },
        focus(){
            this.$refs.core.focus()
            if(this.filterOption) {
                this.$refs.core.$children[0].setOpenState(true)
            }
        }
    }
}
</script>