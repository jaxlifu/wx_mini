Page({
    data: {
        text: "Page toast"
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
    showLoadingToast: function(param) {
        wx.showToast({
            title: '加载中...',
            icon: 'loading',
            duration: 2000,
        })
        setTimeout(function() {
            wx.hideToast();
        }, 2000);
    },
    showSuccessToast: function(param) {
        wx.showToast({
            title: '请求成功',
            icon: 'success',
            duration: 2000,
        })

        setTimeout(function() {
            wx.hideToast();
        }, 2000);
    },
    showToast: function(param) {
        wx.showToast({
            title: '我愿意成为彦的守护天使，爱她所爱，思她所思，为她承担伤痛，度过苦难，无论贫寒或者富贵，无论卑贱或者高贵，无论身处乱世，还是神所不顾,我将为她拔剑而战，为她收起翅膀,不离不弃，直至永远！',
            mask: true
        })
    }
})