Page({
    data: {
        text: "Page action-sheet",
        actionSheetItems: ['泰达米尔', '易大师', '赵信'],
        hero: ''
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
    showActionSheet: function(param) {
        var page = this;
        wx.showActionSheet({
            itemList: page.data.actionSheetItems,
            success: function(res) {
                console.log(page.data.actionSheetItems[res.tapIndex])
                console.log(res.tapIndex)
                page.setData({
                    hero: page.data.actionSheetItems[res.tapIndex]
                })
            },
            fail: function(res) {
                console.log(res.errMsg)
            }
        });
    }
})