const axios = require('axios');
const { codeUrl } = require('../api/cqzk');
const qs = require('qs');

const service = axios.create({

});

//  请求拦截器
service.interceptors.request.use(config => {
  config.headers = Object.assign({}, config.headers);
  return config;
}, error => {
  return Promise.reject(error);
});

//  响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.status === 200 || res.code === 200) {
      if (response.config.url === codeUrl) {
        return Promise.resolve({ id: response.headers.captchacode, data: res.custom });
      }
      return Promise.resolve(res.custom || res.data);
    } else {
      return Promise.reject(res)
    }
  }, error => {
    return Promise.reject(error)
  }
);


module.exports = service;
