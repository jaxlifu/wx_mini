Page({
    data: {
        text: "Page map",
        markers: [{
            iconPath: "../../resources/kind/map.png",
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 50,
            height: 50
        }],
        polyline: [{
            points: [{
                longitude: 113.3245211,
                latitude: 23.10229
            }, {
                longitude: 113.324520,
                latitude: 23.21229
            }],
            color: '#ff0000DD',
            width: 2,
            dottenLine: true
        }],
        controls: [{
            id: 1,
            iconPath: '../../resources/kind/map.png',
            position: {
                left: 0,
                top: 300 - 50,
                width: 50,
                height: 50
            },
            clickable: true
        }]
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
    regionChange: function(param) {
        console.log(param);
        console.log(param.type);
    },
    markertap: function(param) {
        console.log(param);
        console.log(param.markerId);
    },
    controltap: function(param) {
        console.log(param);
        console.log(param.controlId);
    }
})