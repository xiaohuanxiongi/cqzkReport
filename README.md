<div align="center">
<h1 align="center">重庆健康上报脚本</h1>

[![GitHub stars](https://img.shields.io/github/stars/xiaohuanxiongi/cqzkReport?style=flat-square)](https://github.com/xiaohuanxiongi/cqzkReport/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/xiaohuanxiongi/cqzkReport?style=flat-square)](https://github.com/xiaohuanxiongi/cqzkReport/network)

</div>

# 健康上报脚本 - 基本操作

1.  点击`settings > Secrets`;
2.  点击`New repository secret`;
3.  添加4个参数,分别为`QQ`、`EMAIL`、`CQZK`、`REPORTADD`;
4.  参数分别代表含义与格式：
    `QQ`：`接收上报发送邮件的邮箱`;<br>
    `EMAIL`：`邮箱的授权码`；<br>
    `CQZK`：`账号密码信息，格式为：账号&&密码`；<br>
    `REPORTADD`：`居住地信息地址，格式为：省-市-区,详细地址，例：重庆-重庆市-江北区,航天职业技术学院。`<br>
    <b>注意：英文逗号<b>
4.  点击`Actions`开启流;

##  邮箱授权码获取方式
1.  从`邮箱 -> 设置 -> 账户 -> POP3/SMTP服务`获取的授权码;
2.  在`Secrets`中新增`EMAIL`名称;
3.  重新开启`Actions`流,进行自动执行;
