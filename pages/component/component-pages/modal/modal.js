Page({
    data: {
        text: "Page modal"
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
    showModal: function(param) {
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            showCancel: false,
            success: function(param) {
                if (param.confirm) {
                    console.log("用户点击确定")
                }
            }
        })
    }
})