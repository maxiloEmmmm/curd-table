const Http = {
    engine: null,
    errorMsgAdapter: r => r.response.data,
    ext: {},
    getEngine(key){
        key = key ? key : "default"
        if(key == "default" || !Http.ext[key]) {
            return {engine: Http.engine, errorMsgAdapter: Http.errorMsgAdapter}
        }else {
            return Http.ext[key]
        }
    }
}

export default Http