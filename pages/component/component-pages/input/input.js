Page({
    data: {
        text: "Page input",
        focus: false,
        inputValue: ""
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
    bindKeyInput: function(param) {
        this.setData({
            inputValue: param.detail.value
        })
    },
    bindHideKeyboard: function(param) {
        if (param.detail.value === "123") {
            wx.hideKeyboard();
        }
    },
    inputFocus: function(param) {
        this.setData({
            focus: !this.data.focus
        })
    },
    bindReplaceInput: function(param) {
        console.log(param);
        var value = param.detail.value;
        var pos = param.detail.cursor;
        if (pos != -1) {
            var left = param.detail.value.slice(0, pos);
            pos = left.replace(/11/g, "2").length;
        }
        return {
            value: value.replace(/11/g, "2"),
            cursor: pos
        }
    }
})