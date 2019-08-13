// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    birDate:'请输入生日',
    username:'',
    phone:'',
    birthday:'',

    currentDate: new Date().getTime(),
    // minDate: new Date().getTime(),
    minDate: new Date('1985-01-01'),
    maxDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    }
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
  },

  getUsername:function(e){
    if(e.detail.value==''){
      wx.showModal({
        content: '请输入用户名',
      })
    }
    this.setData({username:e.detail})
  },

  getPhone:function(e){
    if (e.detail.value.length !=11) {
      wx.showModal({
        title: '',
        content: '请输入11位数字',
      })
    }
    this.setData({phone:e.detail})
  },

  //注册会员
  registerMember:function(){
    if (this.data.username.value == undefined || this.data.phone.value == undefined ||
      this.data.phone.value.length != 11 || this.data.birthday == undefined) {
      wx.showModal({
        title: '',
        content: '输入的信息有误，请重新输入！',
      })
    }else
      wx.cloud.callFunction({
        // 云函数名称
        name: 'registerMember',
        // 传给云函数的参数
        data: {
          username: this.data.username,
          phone: this.data.phone,
          birthday:this.data.birthday,
        },
        success: function (res) {
          let userInfo = res.result.userInfo
          wx.redirectTo({
            url: '/pages/showcard/showcard?userInfo='+JSON.stringify(userInfo),
          })
        },
        fail: console.error
      })
    },

  //日期弹出
  onInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },
  onClose() {
    this.setData({ show: false });
  },
  showDate(envent){
    this.setData({show:true})
  },
  cancelPopup(){
    this.setData({ show: false });
  },
  //提交的日期
  confirmPopup(value){
    var date = new Date(value.detail);
    var bir = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    this.setData({ show: false,birthday:bir});
  },

})