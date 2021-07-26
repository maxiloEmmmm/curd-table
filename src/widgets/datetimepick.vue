<template>
    <a-date-picker :showTime="showTime" inputReadOnly :format="format" ref="core" :disabled="disabled" size="small" style="width:100%" v-model="v" @change="onChange">
    </a-date-picker>
</template>

<script lang="jsx">
import moment from "moment"
export default {
    name: 'toolDatetimepick',
    props: {
        value: String,
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
        const value = !this.$props.value ? null : moment(this.$props.value, this.format);
        // format time, force change
        this.$emit('change', value)
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