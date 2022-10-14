const service = require('../service/cqzkService');
const { CQZK } = require('../config');
const sendEmail  = require('./email');

//  自动上报健康信息
if (!CQZK) {
  console.log(`请设置账号密码`);
} else {
  login()
}

async function login () {
  service.getCodeService().then((base64) => {
    const token = 'Basic YWRtaW46MTc0NDQzNzMzMw==';
    service.checkCodeService(base64.data, token).then((code) => {
      const params = {
        sfzh: CQZK.split('&&')[0],
        password: CQZK.split('&&')[1],
        captcha: code,
        captchacode: base64.id,
        xmid: '0838d736f15e469da6ade16ad64755bb'
      }
      service.loginService(params).then((token) => {
        service.healthReport(token.token).then(() => {
          console.log(`上报完成`)
        }).catch(err => {
          console.log(`上报失败:`, err);
          sendEmail(false, [{ msg: '上报失败,请登录pc端查看原因' }]);
        })
      }).catch(err => {
        if (err.status === 202) {
          return login()
        }
        console.log('登录错误:', err)
      })
    }).catch(err => {
      console.log(`解析验证码失败`, err)
      sendEmail(false, [{ msg: '解析验证码失败,上报失败' }]);
    })
  }).catch(err => {
    console.log(`获取验证码失败`, err);
    sendEmail(false, [{ msg: '获取验证码失败,上报失败' }]);
  })
}
