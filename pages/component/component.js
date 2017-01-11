Page({
  data: {
    text: "Page component",
    list: [{
      id: "view",
      name: "视图容器",
      open: "false",
      pages: ["view", "scroll-view", "swiper"]
    }, {
      id: "content",
      name: "基础内容",
      open: "false",
      pages: ["text", "icon", "progress"]
    }, {
      id: "form",
      name: "表单组件",
      open: "false",
      pages: ["button", "checkbox", "form", "input", "label", "picker", "radio", "slider", "switch"]
    }, {
      id: "feedback",
      name: "操作反馈",
      open: "false",
      pages: ["action-sheet", "modal", "toast", "loading"]
    }, {
      id: "navigator",
      name: "导航",
      open: "false",
      pages: ["navigator"]
    }, {
      id: "media",
      name: "媒体操作",
      open: "false",
      pages: ["image", "audio", "video"]
    }, {
      id: "map",
      name: "地图",
      open: "false",
      pages: ["map"]
    }, {
      id: "canvas",
      name: "画布",
      open: "false",
      pages: ["canvas"]
    }],
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
  widgetsToggle: function (param) {
    var id = param.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }

    this.setData({
      list: list
    });
  }
})