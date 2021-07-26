<template>
    <a-radio-group :button-style="solid ? 'solid' : 'outline'" :options="options" ref="core" :disabled="disabled" size="small" style="width:100%" v-model="v" @change="onChange"/>
</template>

<script lang="jsx">
import utils from "../utils"
export default {
    name: 'toolRadio',
    props: {
        value: String,
        solid: {
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
        const value = utils.getType(this.$props.value) === 'Undefined' ? "" : this.$props.value;
        value !== this.$props.value && this.$emit('change', value)
       
        return {v: value}
    },
    methods: {
        onChange(){
            this.$emit('change', this.v)
        },
        focus(){
            this.$refs.core.focus()
        }
    }
}
</script>