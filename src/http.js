const Http = {
    engine: null,
    errorMsgAdapter: r => r.response.data,
}

export default Http