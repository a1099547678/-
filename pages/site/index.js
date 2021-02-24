// pages/site/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 114.461853,
    latitude: 30.436154,
    scale: 15,
    markers: [{
      id: 0,
      longitude: 114.461853,
      latitude: 30.436154,
      width:'100rpx',
      height:'100rpx',
      iconPath:"../../images/navi.png"
    }]
  },
  //点击标点
  markertap:function(){
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name:'武汉商贸职业学院',
      address:'湖北省武汉市东湖新技术开发区光谷二路225号'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})