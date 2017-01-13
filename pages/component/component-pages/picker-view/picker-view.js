const date = new Date();
const years = [];
const months = [];
const days = [];
for (let i = 1990; i <= date.getFullYear(); i++) {
    years.push(i);
}

for (let i = 1; i <= 12; i++) {
    months.push(i);
}

for (let i = 1; i <= 31; i++) {
    days.push(i);
}
Page({
    data: {
        text: "Page picker-view",
        year: date.getFullYear(),
        years: years,
        month: 1,
        months: months,
        day: 12,
        days: days,
        value: [9999, 1, 1]
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
    bindChange: function(param) {
        const value = param.detail.value;
        console.log(param.detail.value)
        this.setData({
            year: this.data.years[value[0]],
            month: this.data.months[value[1]],
            day: this.data.days[value[2]],
        })
    }
})