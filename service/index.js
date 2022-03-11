const axios = require('../utils/request');
const { checkInApi, draw } = require('../api/juejin');
const { getTbsUrl, onekeySignin } = require('../api/baidu');
const { ylApi, biliLive } = require('../api/common');
const qs = require('qs');

//  掘金签到
function checkIn(cookie) {
  return axios.post(checkInApi, {}, { headers: { cookie }, name: 'juejin' })
}

//  掘金-抽奖一次
function lottery(cookie) {
  return axios.post(draw, {}, { headers: { cookie }, name: 'juejin' })
}

//  获取贴吧tbs
function getTbs(cookie) {
  return axios.get(getTbsUrl, { headers: { cookie }, name: 'baidu' })
}
//  百度签到
function checkInBaiDu(params, cookie) {
  return axios.post(onekeySignin, qs.stringify(params), { headers: { cookie }, name: 'baidu' })
}

//  一言语录
function ylService() {
  return axios.get(ylApi)
}

//  哔哩哔哩直播签到
function biliLiveService(cookie) {
  return axios.get(biliLive, { headers: { cookie }, name: 'bili' })
}

module.exports = {
  checkIn,
  lottery,
  getTbs,
  checkInBaiDu,
  ylService,
  biliLiveService
}
