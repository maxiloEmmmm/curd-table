<script lang="jsx">
export default {
    name: "tool-map",
    render(){
        return <tw-list-item2 fit index indexStart indexBorder items={[
            ...Object.keys(this.dataset).map(item => {
                return {
                    title: item,
                    desc: <a-input size={this.size} disabled={this.disabled} value={this.dataset[item]} vOn:change={e => this.onChange(item, e.target.value)} />
                }
            }),
            {title: <a-button size={this.size} disabled={this.disabled} vOn:click={this.onNew}>新增</a-button>}
        ]}>
        </tw-list-item2>
    },
    props: {
        value: {type: Object, default(){
            return {}
        }},
        disabled: {type: Boolean, default: false},
        size: {type: String, default: "small"}
    },
    methods: {
        focus(){},
        onChange(k, v){
            this.dataset[k] = v
            this.$emit("change", this.dataset)
        },
        onNew(){
            this.newKey = ''
            this.$confirm({
                title: '请键入新key',
                content: () => <a-input size={this.size} disabled={this.disabled} vOn:change={e => this.newKey = e.target.value}/>,
                onOk: () => {
                    if(!this.newKey || this.dataset[this.newKey] !== undefined) {
                        this.$message.info('key存在或为空')
                        return 
                    }
                    this.dataset[this.newKey] =  ''
                },
                onCancel() { },
            })
        }
    },
    data(){
        return {
            newKey: '',
            dataset: Object.assign({}, this.value)
        }
    }
}
</script>