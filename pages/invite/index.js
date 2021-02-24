// pages/invite/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay:true,
  },
  // 音乐播放功能
  music:function(e){
    if(this.data.isPlay){
      this.setData({
        isPlay:false
      })
      this.bgm.pause()
    }else{
      this.setData({
        isPlay:true
      })
      this.bgm.play()
    }
  },
  bgm:null,
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 创建实例
    this.bgm = wx.getBackgroundAudioManager(),
    // 设置获取的数据
    this.bgm.src = 'http://music.163.com/song/media/outer/url?id=5249851.mp3',
    this.bgm.coverImgUrl = 'http://pic.k7dj.com/pic/4009.jpg'
    this.bgm.title = '短发',
    this.bgm.singer = '梁咏琪'
    // 单群循环
    var that = this
    this.bgm.onEnded((err)=>{
      if(err) console.log(err)
      that.bgm.src='http://music.163.com/song/media/outer/url?id=5249851.mp3'
    })
  },
  // 拨打电话
  callBoy:function(){
    wx.makePhoneCall({
      phoneNumber: '17707284162'
    })
  },
  callGirl:function(){
    wx.makePhoneCall({
      phoneNumber: '17671446340'
    })
  }
})