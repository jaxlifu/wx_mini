var order = ['green', 'red', 'yellow', 'blue', 'green'];

Page({
  data: {
    text: "Page scroll-view",
    toView: 'green'
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
  upper: function (param) {
    console.log(param)
  },
  lower: function (param) {
    console.log(param)
  },
  scroll: function (param) {
    console.log(param)
  },
  scrollToTop: function (param) {
    this.setAction({
      scrollToTop: 0
    })
  },
  tap: function (param) {
    for (var i = 0; i < this.data.toView; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        });
        break;
      }
    }
  },
  tapMove: function (param) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})