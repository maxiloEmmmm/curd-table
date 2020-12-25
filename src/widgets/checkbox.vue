<template>
    <a-checkbox-group :options="options" ref="core" :disabled="disabled" size="small" style="width:100%" v-model="v" @change="onChange"/>
</template>

<script>
import utils from "../utils"
export default {
    name: 'toolCheckbox',
    props: {
        value: {
            default: () => [],
            type: Array
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
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    watch: {
        value: {
            handler(){
                this.v = this.value
            },
            deep: true
        }
    },
    data(){
        const value = utils.getType(this.$props.value) === 'Undefined' ? [] : this.$props.value;
        value !== this.$props.value && this.$emit('change', value)
       
        return {v: value}
    },
    methods: {
        onChange(v){
            this.$emit('change', this.v)
        },
        focus(){
            this.$refs.core.focus()
        }
    }
}
</script>