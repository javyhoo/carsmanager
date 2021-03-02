// index.js
// 获取应用实例
const app = getApp()

var localCars = require("../../data/cars.js")

console.log(localCars)

Page({
  data: {
    cars: []
  },
  onLoad() {
    // if (app.globalData.userInfo) {
    if (true) {
      console.log("index userInfo true ")
      this.setData({
        cars:localCars.carJsonList
      })
    } else {
      console.log("index navigate to login ")
      wx.navigateTo({
        url: '../user/login',
      })
    }
  }
})