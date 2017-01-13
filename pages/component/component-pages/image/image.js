Page({
    data: {
        text: "Page image",
        array: [
            { mode: 'scaleToFill', text: '不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素' },
            { mode: 'aspectFit', text: '保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。' },
            { mode: 'aspectFill', text: '保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。' },
            { mode: 'widthFix', text: '宽度不变，高度自动变化，保持原图宽高比不变' },
            { mode: 'top', text: '不缩放图片，只显示图片的顶部区域' },
            { mode: 'bottom', text: '不缩放图片，只显示图片的底部区域' },
            { mode: 'center', text: '不缩放图片，只显示图片的中间区域' },
            { mode: 'left', text: '不缩放图片，只显示图片的左边区域' },
            { mode: 'right', text: '不缩放图片，只显示图片的右边区域' },
            { mode: 'top left', text: '不缩放图片，只显示图片的左上边区域' },
            { mode: 'top right', text: '不缩放图片，只显示图片的右上边区域' },
            { mode: 'bottom left', text: '不缩放图片，只显示图片的左下边区域' },
            { mode: 'bottom right', text: '不缩放图片，只显示图片的右下边区域' },
        ],
        src: 'http://img.faloo.com/NovelNode/0x0/1/1221/1221883.gif'
    },
    bindload: function(param) {
        console.log(param);
        console.log(param.detail);
    },
    binderror: function(param) {
        console.log(param);
        console.log(param.detail);
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