Page({
    data: {
        text: "Page picker",
        index: 0,
        array: ['美国', '中国', '巴西', '日本']

    },
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },
    bindPickerChange: function(param) {
        console.log(param)
        console.log('picker发送选择改变，携带值为', param.detail.value)
        this.setData({ index: param.detail.value })
    }
})