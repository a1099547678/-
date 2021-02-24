// pages/guest/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ranges: [{
      id: 0,
      content: '0'
    }, {
      id: 1,
      content: '1'
    }, {
      id: 2,
      content: '2'
    }, {
      id: 3,
      content: '3'
    },{
      id: 4,
      content: '4'
    }],
    index: 1,
    disabledFlag:false,
    tj:'提交'
  },
    callFlag:false,
    phoneFlag:false,
    blessFlag:false,
  //姓名验证
  call:function(e){
    var cnPattern = /[\u4E00-\u9FA5]/;
    var call = e.detail.value
    if(!cnPattern.test(call)){
      wx.showToast({
        title: '姓名输入有误',
        icon: 'none',
        duration: 2000
      })
      this.callFlag = false
    }else{
      this.callFlag = true
    }
  },
  //手机号码验证
  phone:function(e){
    var mPattern = /^1[34578]\d{9}$/;
    var phone = e.detail.value
    if(!mPattern.test(phone)){
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 2000
      })
      this.phoneFlag = false
    }else{
      this.phoneFlag = true
    }
  },
  //祝福语验证
  bless:function(e){
    var re = /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
    var bless = e.detail.value
    if(re.test(bless)){
      wx.showToast({
        title: '含有非法字符',
        icon: 'none',
        duration: 2000
      })
      this.blessFlag = false
    }else{
      this.blessFlag = true
    }
  },
  //提交按钮
  submit: function (e) {
    if(this.callFlag && this.phoneFlag && this.blessFlag){
      wx.showToast({
        title: '感谢您的参加',
        duration: 2000
      })
      this.setData({
        disabledFlag:true,
        tj:'已成功提交，感谢您的参加'
      })
      wx.login({
        complete: (res) => {
          console.log(res)
          wx.request({
            url: 'http://localhost:3000/home?code=' + res.code
          })
        },
      })
      wx.requestSubscribeMessage({
        tmplIds:['dT0GwX0AKAbzM0Oi06ZQC5By7qL8g1rFOJuPQObtWBw']
      })
      console.log(e.detail.value)
    }else{
      wx.showToast({
        title: '信息输入有误',
        icon: 'none',
        duration: 2000
      })
    }
  },
  //滚动选择器
  paset:function(e){
    //console.log(e)
    this.setData({
      index: e.detail.value
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