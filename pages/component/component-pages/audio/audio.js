Page({
    data: {
        text: "Page audio",
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        name: '此时此刻',
        author: '许巍',
        poster:'http://p3.music.126.net/_IJjFaL5b_eDXUFrVbTCYw==/3438172865530348.jpg?param=200y200',
        maxTime: 401,
    },
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
        this.audioCtx = wx.createAudioContext('audio')
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
    audioPlay: function() {
        this.audioCtx.play();
    },
    audioPause: function(param) {
      console.log(param.detail.value)
        this.audioCtx.pause();
    },
    audioTime: function(param) {
        console.log(param.detail.value);
        this.audioCtx.seek(param.detail.value);
    },
    audioStart: function(param) {
        this.audioCtx.seek(0);
    }

})