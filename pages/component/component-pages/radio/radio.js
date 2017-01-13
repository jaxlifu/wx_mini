Page({
    data: {
        text: "Page radio",
        hero: '',
        items: ['盖伦', '卡特琳娜', '赵信', '炙心', '嘉文', '蕾娜', '凯特琳']
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
    bindchange: function(param) {
        console.log("当前选择的是: ", param.detail.value)
        this.setData({
            hero: param.detail.value
        })
    }
})