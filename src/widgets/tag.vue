<script>
export default {
    name: "tool-tag",
    render(){
        return <tw-list-item1 fit index indexBorder items={[
            ...this.dataset.map(item => {
                return {
                    title: <a-tag color="#108ee9" closable vOn:close={e => this.onRemove(item)}>{item}</a-tag>,
                }
            }),
            {title: <a-button size={this.size} disabled={this.disabled} vOn:click={this.onNew}>新增</a-button>}
        ]}>
        </tw-list-item1>
    },
    props: {
        value: {type: Array, default(){
            return []
        }},
        disabled: {type: Boolean, default: false},
        size: {type: String, default: "small"}
    },
    methods: {
        focus(){},
        onRemove(v){
            this.dataset = this.dataset.filter(val => val != v)
            this.onChange()
        },
        onChange(){
            this.$emit("change", this.dataset)
        },
        onNew(){
            this.newTag = ''
            this.$confirm({
                title: '请键入新标签',
                content: h => <a-input size={this.size} disabled={this.disabled} vOn:change={e => this.newTag = e.target.value}/>,
                onOk: () => {
                    if(!this.newTag || this.dataset.filter(val => val == this.newTag).length > 0) {
                        this.$message.info('标签存在或为空')
                        return 
                    }
                    this.dataset.push(this.newTag)
                    this.onChange()
                },
                onCancel() { },
            })
        }
    },
    data(){
        return {
            newTag: '',
            dataset: Object.assign([], this.value)
        }
    }
}
</script>