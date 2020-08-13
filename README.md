```bash
yarn add antd-vue-tool
```

```javascript
import httpConfig from "antd-vue-tool/src/http"
httpConfig.engine = yoursHttpEngineLikeAxiosInstance
httpConfig.errorMsgAdapter = r => {
    return "format 「r」"
}
```

### state
```javascript
this.$state.newFailState(Promise, {
    response: Function,
    message: Function,
    title: String,
    onlyFail: Boolean
})

this.$state.newFailState(new Promise((ok, nok) => {
    setTimeout(() => ok(""), 1000)
}), {message: m => m, title: "hi"})

this.$state.newFailState(new Promise((ok, nok) => {
    setTimeout(() => nok("fail"), 1000)
}), {message: m => m, title: "hi"})

this.$state.newState(new Promise((ok, nok) => {
    setTimeout(() => ok(""), 1000)
}), {message: m => m, response: ({ok, result} => {
    if(ok) {
        //http status code 20x
    }else {
        
    }
})})
```

### tool-curd
```javascript
// jsx
<tool-curd 
    models={this.models} 
    fetchUrl="/project" 
    vOn:config={this.onConfig}
    columns={this.columns}>
</tool-curd>

<script>
    export default {
        methods: {
        onConfig(item){}
    },
    data(){
        return {
            columns: [
                {title: "项目", validate: "required", field: "Project", type: "string"},
                {title: "服务器", validate: "required", field: "Server.Key", form_key: "Server", form_value_key: "Server.Key", type: "select", filter: true, filterKey: "server", option: {
                    selectOptions: () => this.server,
                    minSelectWidth: "150px"
                }},
                {title: "简称", validate: "required", field: "Title", type: "string", help_msg: "人类可读信息"},
                {title: "简述", validate: "required", field: "Desc", type: "string", option: {textarea: true}},
                {title: "配置", validate: "required|configOk", field: "config", hidden: true, type: "code", option: {language: "yaml"}},
                {title: "危险锁", field: "Lock", type: "switch", option: {checkText: "已加锁", unCheckText: "未加锁"}, default: true, help_msg: "加锁后不可销毁和部署"},
                {title: "ID", validate: "required", field: "Id", hidden: true, type: "string", key: true},
            ], 
            models: [
                {dispatchArea: "topBar", hide: ["Id"], title: "新增项目", type: "action", key: "new", xhr: {url: "/project", method: "post"}, layout_group: 1, dispatchReset: true},
                {title: "修改", show: ["Title", "Desc", "Lock"], type: "action", key: "update", xhr: {url: "/project", method: "patch"}},
                {title: "配置", type: "api", api: "event", key: "config",},
                {title: "删除", type: "action", key: "delete", hide: "*", xhr: {url: "/project", method: "delete"}}
            ]}
        },
    }
</script>
```

| 字段             | 类型         | 默认值 | 说明                          |
| ---------------- | ------------ | ------ | ----------------------------- |
| title            | string\|slot | -      | 标题                          |
| fetchUrl         | 数据接口     | -      | 返回{data: [], total: 0}      |
| actionNewRow     | bool         | false  | 启用新增行操作                |
| actionEditRow    | bool         | False  | 启用修改行操作                |
| actionEditFilter | function     | r => r | 数据修改过滤                  |
| pageSize         | int          | 10     | 每页条数                      |
| fetchTransform   | function     | r => r | 数据接口过滤                  |
| dataSource       | array        | []     | 自定义数据 只有fetchUrl无效时 |
| models           | array        | []     | 模型                          |
| columns          | array        | []     | 行                            |



Columns

| 字段         | 类型     | 默认值                                                    | 说明                                                         |
| ------------ | -------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| title        | string   | -                                                         | 列标题 表单标题                                              |
| field        | string   | -                                                         | 数据字段<br />当type为select时field为value字段而不是title 会根据value字段选择对应的title字段 对应关系通过option的selectOptions提供 |
| form_key     | string   | field                                                     | 表单字段                                                     |
| form_value   | string   | form_key                                                  | 表单数据字段                                                 |
| type         | string   | string                                                    | 数据类型                                                     |
| customRender | function | (text, item, index) => {return {children: "", attrs: {}}} | 渲染函数                                                     |
| hidden       | bool     | false                                                     | 隐藏                                                         |
| filter       | bool     | false                                                     | 开启筛选                                                     |
| filterKey    | string   | field                                                     | 筛选key                                                      |
| option       | obj      | {}                                                        | 根据type设定选项                                             |
| key          | bool     | false                                                     | 主键                                                         |
| validate     | string   | -                                                         | 验证规则                                                     |
| default      | mix      | 根据type浮动                                              | 默认值                                                       |
| help_msg     | string   | -                                                   | 表单帮助消息                                                 |



Models

| 字段             | 类型   | 默认值    | 说明                                                   |
| ---------------- | ------ | --------- | ------------------------------------------------------ |
| dispatchArea     | String | rowBar    | 操作按钮出现的区域<br />rowBar \| topBar               |
| type             | String | action    | 操作类型<br />action \| api \| relation                |
| title            | string | -         | 操作标题 作用在button或modal                           |
| key              | string | -         | 唯一操作标识 用于切换model或api event触发事件名        |
| api              | string | -         | type为api时api得类型<br />event \| new-row \| edit-row |
| xhr              | obj    | -         | 表单提交                                               |
| xhr.url          | string | -         | 表单提交地址 为空时等价fetchUrl                        |
| xhr.method       | string | get       | 表单提交方法                                           |
| xhr.autoClose    | bool   | false     | 提交后自动关闭                                         |
| xhr.okMsg        | string | ok~       | 提交成功提示信息                                       |
| xhr.notifyEngine | string | message   | 提交成功显示控件                                       |
| xhr.confirm      | bool   | true      | 提交是否确认                                           |
| xhr.confirmMsg   | string | 确认操作? | 提交确认信息                                           |
| layout_group     | int    | 2         | 表单分栏数                                             |
| show             | array  | []        | 显示字段集合                                           |
| hide             | array  | []        | 隐藏字段集合                                           |
| disabled         | array  | []        | 禁用集合                                               |
| pick             | array  | []        | 表单提交字段集合                                       |
| omit             | array  | []        | 表单提交排除集合                                       |
| dispatchReset    | bool   | false     | 自动清空                                               |


