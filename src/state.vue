<script lang="jsx">
export default {
    name: "toolState",
    props: {
        promise: {type: Promise},
        message: {type: Function, default: () => ""}
    },
    render(){
        return <ysz-list-item>
            {this.end ? null : <a-spin slot="left"/>}
            {this.end
                ? this._msg : ""}
        </ysz-list-item>
    },
    computed: {
        _msg() {
            return this.ok ? "操作成功" : ("操作失败" + (this.msg ? `, ${this.msg}` : ""))
        }
    },
    created(){
        this.promise
            .then(r => {
                this.result = r
                this.ok = true
            })
            .catch(r => {
                this.result = r
                this.ok = false
                this.msg = this.message(r)
            })
            .finally(() => {
                this.end = true
                this.$emit("end", {ok: this.ok, result: this.result})
            })
    },
    data(){
        return {
            ok: false,
            end: false,
            result: {},
            msg: ""
        }
    },
}
</script>