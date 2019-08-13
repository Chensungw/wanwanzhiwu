// 云函数入口文件
const cloud = require('wx-server-sdk')

//初始化
cloud.init()

//获取数据库对象
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const userInfo = await db.collection("user").where({
    _openid:wxContext.OPENID
  }).get();


  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    userInfo:userInfo,
  }
}