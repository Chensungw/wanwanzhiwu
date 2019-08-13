//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bnrUrl": [{
      "url": "img/1.png"
    }, {
      "url": "img/2.png"
    }, {
      "url": "img/3.png"
    }, {
      "url": "img/4.png"
    }],
    memberStatus:'false'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   memberStatus: options.member
    // })
    
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
    
  },

  //会员卡
  clickImg_2:function(){
    let that = this;
    wx.cloud.callFunction({
      name: 'checkLoginStatus',
      data: {},
      success: function (res) {
        let userInfo = res.result.userInfo;
        //新用户跳转到注册
        if (userInfo.data.length == 0) {
          wx.navigateTo({
            url: '/pages/register/register'
          })
        } else {
          //老用户显示会员界面
          wx.navigateTo({
            url: '/pages/showcard/showcard?userInfo=' + JSON.stringify(userInfo)
          })
        }
      },
      fail: console.log()
    })
    
  },

  //关于店铺
  clickImg_3:function(){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },

  //会员福利
  clickImg_1:function(){
    wx.navigateTo({
      url: '/pages/fuli/fuli',
    })
  },
  register:function(){
    wx.redirectTo({
      url: '../register/register',
    })
  }
})