function getRandomColor() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}
Page({
    inputValue: '',
    data: {
        text: "Page video",
        src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        danmuList: [{
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 1
            },
            {
                text: '第 3s 出现的弹幕',
                color: '#ff00ff',
                time: 3
            }
        ],
    },
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
        this.videoContext = wx.createVideoContext("csxy");
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
    bindGetVideo: function(param) {
        console.log(param)
    },
    bindGetVideo: function(param) {
        var page = this;
        wx.chooseVideo({
            sourceType: ['album', 'camera'], // album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
            maxDuration: 60, // 拍摄视频最长拍摄时间，单位秒。最长支持60秒
            camera: ['front', 'back'], // 前置或者后置摄像头，默认为前后都有，即：['front', 'back']
            success: function(res) { // 接口调用成功，返回视频文件的临时文件路径
                console.log(res.tempFilePath)
                page.setData({
                    src: res.tempFilePath
                })
            }
        })
    },
    bindInputBlur: function(param) {
        this.inputValue = param.detail.value
    },
    bindSendDanmu: function(param) {
        this.videoContext.sendDanmu({
            text: this.inputValue,
            color: getRandomColor()
        })

    }
})