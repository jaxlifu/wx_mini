Page({
    data: {
        //页面数据初始化
    },
    onLoad: function(options) {
        //监听页面加载，页面初始化，options为页面跳转所带来的参数
        console.log(options)
        this.setData({
            title: options.title
        })
    },
    onReady: function() {
        //监听页面渲染完成
    },
    onShow: function() {
        //监听页面显示
    },
    onHide: function() {
        //监听页面隐藏
    },
    onUnload: function() {
        //监听页面卸载
    }
})