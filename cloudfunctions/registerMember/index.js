// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  
  const addResult = await db.collection('user').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      username: event.username,
      phone: event.phone,
      birthday:event.birthday,
      _openid:wxContext.OPENID
    }
  })
  const userInfo = await db.collection("user").where({
    _openid:wxContext.OPENID
  }).get()
  return {
    addResult,
    userInfo:userInfo
  }
}