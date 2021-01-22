<template>
    <a-date-picker :showTime="showTime" inputReadOnly :format="format" ref="core" :disabled="disabled" size="small" style="width:100%" v-model="v" @change="onChange">
    </a-date-picker>
</template>

<script>
import utils from "../utils"
import moment from "moment"
export default {
    name: 'toolDatetimepick',
    props: {
        value: "",
        format: {
            default: "YYYY-MM-DD HH:mm:ss",
            type: String
        },
        showTime: {
            default: false,
            type: Boolean
        },
        disabled: {
            default: false,
            type: Boolean
        },
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    watch: {
        value: {
            handler(){
                this.v = !this.value ? null : moment(this.value, this.format)
            },
            deep: true
        }
    },
    data(){
        const value = utils.getType(this.$props.value) === 'Undefined' ? moment(date(), this.format) : moment(this.$props.value, this.format);
        // format time, force change
        this.$emit('change', value)
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