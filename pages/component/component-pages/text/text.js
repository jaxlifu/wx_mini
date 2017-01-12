var initData = 'this is first line\nthis is second line';
var extraLine = [];
Page({
  data: {
    text: "Page text"
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
  add: function (param) {
    extraLine.push("this is a add line");
    this.setData({
      text: initData + "\n" + extraLine.join("\n")
    })
  },
  remove: function (param) {
    if (extraLine.length > 0) {
      extraLine.pop();
      this.setData({
        text: initData + "\n" + extraLine.join("\n")
      })
    }
  }
})