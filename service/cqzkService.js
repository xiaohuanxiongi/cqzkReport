const axios = require('../utils/request');
const qs = require('qs');
const { codeUrl, checkCodeUrl, loginUrl, reportUrl } = require('../api/cqzk');
const { REPORTADD } = require('../config');

const parasm = {
  "sjsbList": [
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "46a1f49e34e5496da91095c90679c83e",
      "sbnrTxt": "绿码"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "2c3d437f3b7d45ee85d365a83eebab8f",
      "sbnrTxt": "绿卡"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "81cc769eb6a54f07ad63bd70543e52bc",
      "sbnrTxt": "否"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "082d6f76ce3f49738b06283148394b42",
      "sbnrTxt": "是"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "3544eeb50ac54c2a86ae8b71bda8ec09",
      "sbnrTxt": "否"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "cd62a9cf6edf45ea9693cd7e088f11d5",
      "sbnrTxt": "否"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "999a5c14dde04c4e9f9b4e8d8aa5a3a6",
      "sbnrTxt": "否"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "cac2bf63fdec4d6bad357b85f4d56b8f",
      "sbnrTxt": "公交,"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "ea8213ef4ff94931ad7a116df763b511",
      "sbnrTxt": "阴性"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "5b8cd91cb28f482f84be07ee69a364a8",
      "sbnrTxt": "否"
    },
    {
      "xmid": "0838d736f15e469da6ade16ad64755bb",
      "tmid": "ae0bf809e4bd492783fe69ea470410cd",
      "sbnrTxt": REPORTADD
    }
  ]
}

//  获取验证码
function getCodeService() {
  return axios.get(codeUrl, { params: { _: new Date().getTime() } });
}

//  识别验证
function checkCodeService(base64, token) {
  return axios.post(
    checkCodeUrl,
    qs.stringify({ data: base64 }),
    { headers: { Authorization: token }}
  );
}

//  登录健康上报系统
function loginService(params) {
  const rnd = Math.random();
  return axios.post(loginUrl + `?rnd=${rnd}`, params)
}

//  健康上报
function healthReport(token) {
  return axios.post(reportUrl, parasm, { headers: { Authorization: token } });
}


module.exports = {
  getCodeService,
  checkCodeService,
  loginService,
  healthReport
}
