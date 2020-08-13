<script>
import CodeMirror from 'codemirror'

import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/anyword-hint'
import 'codemirror/addon/edit/matchbrackets'

import jsBeautify from 'js-beautify'
export default {
    name: "toolCode",
    props: {
        language: {
            type: String,
            default: "javascript"
        },
        value: {type: String, default: ""}
    },
    render(){
        return <div ref="code" style="text-align:left"></div>
    },
    watch: {
        value(val){
            if(this.handler) {
                if(val != this.handler.getValue()) {
                    const scrollInfo = this.handler.getScrollInfo()
                    this.cminstance.setValue(newVal)
                    this.handler.scrollTo(scrollInfo.left, scrollInfo.top)
                }
            }
        }
    },
    data(){return {handler: null}},
    methods: {
        focus(){
            this.handler.focus()
        }
    },
    async mounted(){
        this.handler = CodeMirror(this.$refs.code, {
            lineNumbers:true,
            theme:"seti",
            mode: this.language,
            matchBrackets:true,
            smartIndent: false,
            indentUnit: 4
        })
        this.handler.setValue(this.value)
        this.handler.setSize("100%", "auto")
        this.handler.on("change", r => this.$nextTick(() => this.$emit("change", r.getValue())))
    }
}
</script>

<style lang="scss">
    @import '~codemirror/theme/seti.css';
    @import '~codemirror/lib/codemirror.css';
    @import '~codemirror/addon/hint/show-hint.css';
</style>