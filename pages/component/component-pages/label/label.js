Page({
    data: {
        text: "Page label",
        checkboxItems: [
            { name: 'USA', value: '美国' },
            { name: 'CHN', value: '中国', checked: 'true' },
            { name: 'BRA', value: '巴西' },
            { name: 'JPN', value: '日本', checked: 'true' },
            { name: 'ENG', value: '英国' },
            { name: 'TUR', value: '法国' },
        ],
        radioItems: [
            { name: 'USA', value: '美国' },
            { name: 'CHN', value: '中国', checked: 'true' },
            { name: 'BRA', value: '巴西' },
            { name: 'JPN', value: '日本' },
            { name: 'ENG', value: '英国' },
            { name: 'TUR', value: '法国' },
        ],
        hidden: false

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
    checkboxChange: function(param) {
        var checked = param.detail.value
        var changed = {}
        for (var i = 0; i < this.data.checkboxItems.length; i++) {
            if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
                changed['checkboxItems[' + i + '].checked'] = true
            } else {
                checked['checkboxItems[' + i + '].checked'] = false
            }
        }

        this.setData(changed);
    },
    radioChange: function(param) {
        var checked = param.detail.value;
        var changed = {};
        for (var i = 0; i < this.data.radioItems.length; i++) {
            if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
                changed['radioItems[' + i + '].checked'] = true
            } else {
                changed['radioItems[' + i + '].checked'] = false
            }
        }
        this.setData(changed);

    },
    tapEvent: function(param) { console.log("按钮被点击", param) }
})