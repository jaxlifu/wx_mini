Page({
  data: {
    text: "Page swiper",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  changeIndicatorDots: function (param) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (param) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (param) {
    this.setData({
      interval: param.detail.value
    })
    console.log(param.detail.value)
  },
  durationChange: function (param) {
    this.setData({
      duration: param.detail.value
    })

    console.log(param.detail.value)
  }
})