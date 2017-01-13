Page({
    data: {
        text: "Page api",
        description: '这里就当前已支持的接口能力进行演示',
        apiList: [{
                id: 'net',
                name: '网络',
                open: false,
                pages: ['request', 'uploadFile', 'downloadFile', 'connectSocket']
            },
            {
                id: 'media',
                name: '媒体',
                open: false,
                pages: ['image', 'record', 'voice', 'audio', 'video']
            }, {
                id: 'file',
                name: '文件',
                open: false,
                pages: ['file']
            }, {
                id: 'storage',
                name: '数据缓存',
                pages: ['storage']
            }, {
                id: 'local',
                name: '位置',
                pages: ['getLocation', 'openLocation', 'map']
            }, {
                id: 'device',
                name: '设备',
                pages: ['systemInfo', 'networkState', 'accelerometer', 'compass', 'call', 'scanCode']
            }, {
                id: 'view',
                name: '界面',
                pages: ['feedback', 'navigatorBar', 'navigator', 'anim', 'canvas', 'pullRefresh']
            }, {
                id: 'open',
                name: '开放接口',
                pages: ['login', 'userInfo', 'weChatPay', 'modelMessage', 'contactMessage', 'share', 'qrCode']
            }
        ]
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
    }

})