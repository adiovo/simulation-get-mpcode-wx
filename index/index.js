const app = getApp()

Page({
  data: {
    tips: '',
    code: ''
  },
  onLoad() {
    this.getAuthLoginCode();
  },
  // 获取授权code码
  getAuthLoginCode() {
    let _this = this;

    wx.login({
      success(res) {
        console.log(res);

        _this.setData({ code: '', tips: '' });
        wx.setClipboardData({
          data: res.code,
          success() {
            wx.showToast({
              title: 'Code复制成功！',
              icon: 'success'
            })
            
            _this.setData({
              code: res.code,
              tips: 'Code复制成功，请 Ctrl + V 使用！（有效期在五分钟内使用，并只限使用一次）'
            })
          }
        })
        
      }
    })
  },
  // 微信登录
  bindGetUserInfo(e) {
    this.getAuthLoginCode();
    // wx.getUserProfile({
    //   desc: '用于个人中心信息展示及资料完善',
    //   success(res) {
    //     console.log(res);
    //   },
    //   fail(err) {
    //     console.error(err);
    //   },
    //   complete() { }
    // })
  }
})
