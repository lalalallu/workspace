// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "data": [
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" },
      { "new": "天气预报", "avater": "/res/images/OIP-C.jpg" }
    ],
    "activeItemIndex": 0,
    "activenewItemIndex": 0
  },

  clickavater(event) {
    this.setData({
      activeItemIndex: event.currentTarget.dataset.index
    });
    // this.setData({
    //   avaterflag:!this.data.avaterflag
    // });
  },
  clicknew(event) {
    // this.setData({
    //   anewflag:!this.data.anewflag
    // });
    this.setData({
      activeNewItemIndex: event.currentTarget.dataset.index
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})