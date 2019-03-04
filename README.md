### 微信自动回复消息

##### wechaty
**介绍** wechaty是一个开源的的 **个人号** 微信机器人接口，是一个使用Typescript 构建的Node.js 应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。同时支持Linux, OSX, Win32 和 Docker 等多个平台。
- 文档: https://docs.chatie.io/v/zh/
- 如何使用：https://github.com/chatie/wechaty

##### qrcode-terminal
- 在控制台打印二维码
- 使用: http://www.ptbird.cn/nodejs-terminal-qrcode-img.html

##### chalk
- 输出颜色
- 使用: https://github.com/chalk/chalk

##### superagent
- 请求
- https://www.npmjs.com/package/superagent

##### node-schedule
- 定时任务
- https://github.com/node-schedule/node-schedule

##### cheerio
- 爬虫
- https://github.com/cheeriojs/cheerio#readme

更多功能包括：
- 消息处理：关键词回复
- 群管理：自动入群，拉人，踢人
- 自动处理好友请求
- 智能对话：通过简单配置，即可加入智能对话系统，完成指定任务
- ... 请自行开脑洞

## 快速开始
  ```
  git clone 
  npm install
  npm run start
  ```

### 4. Web 限制登陆的解决办法：

从2017年6月下旬开始，使用基于web版微信接入方案存在大概率的被限制登陆的可能性。 主要表现为：无法登陆Web 微信，但不影响手机等其他平台。验证是否被限制登陆： https://wx.qq.com 上扫码查看是否能登陆。

如果还希望接入，推荐你切换到非WEB的接入方式，我们现在提供一个ipad 的接入方式，只需要下面2条命令就可以切换成功：

```shell
# 1. 安装 wechaty-puppet-padchat
npm install wechaty-puppet-padchat

# 2. 通过环境变量设置接入方式并设置token 运行
WECHATY_PUPPET_PADCHAT_TOKEN=your_padchat_token WECHATY_PUPPET=padchat node examples/ding-dong-bot.js
```

**说明**
1. [点击查看获取token的方法](https://github.com/lijiarui/wechaty-puppet-padchat/wiki/%E8%B4%AD%E4%B9%B0token)
2. 具体实现请看：具体细节请看[puppet-padchat](https://github.com/lijiarui/wechaty-puppet-padchat)


## 试一试
![Wechaty Developers' Home](https://chatie.io/wechaty-getting-started/bot-qr-code.png)

回复 'wechaty' 加入 Wechaty 开发者群。
> 群内均为wechaty 的开发者，如果仅是为了测试功能，请测试后自动退群。为了避免广告及不看文档用户，群主及机器人会T人，不喜勿加。群内发言之前请先阅读文档，谢谢！


### 2. 示例代码
下面的表格解释了examples目录下各个代码的功能

| 文件名称        | 描述 |
| ---                 | ---         |
| contact-bot.js      | 展示微信号下所有联系的人微信ID和昵称。|
| media-file-bot.js   | 将消息中的文件、图片、视频等非文本信息存到本地。 |
| tuling123-bot.ts    | 接入tuling123 机器人，可以回答任何消息。 |

[点击这里查看 更多Wechaty 官方 示例代码](https://github.com/Chatie/wechaty/tree/master/examples)

### 3. 什么是 WECHATY_PUPPET

不同的Puppet是代表的我们对微信协议的不同实现方式，所以请选择一种适合您的选择，本项目默认使用web 协议实现，更详细的介绍参考[Puppet的详情](https://wechaty.botorange.com/puppet)

同时我们提供 ipad实现方式, 请查看 [puppet-padchat](https://github.com/lijiarui/wechaty-puppet-padchat) 介绍并获取[token](https://github.com/lijiarui/wechaty-puppet-padchat/wiki/%E8%B4%AD%E4%B9%B0token)

## 常见问题 FAQ

### 1. 每次登陆都要扫码么？
默认情况下，系统可以自动登陆，信息保存在 *.memory-card.json 中

### 2. 支持 红包、转账、朋友圈… 吗？
以下功能目前 均不支持

支付相关 - 红包、转账、收款 等都不支持
在群聊中@他人 - 是的，Web 微信中被人@后也不会提醒
发送名片
发送分享链接
发送语音消息 - 后续会支持
朋友圈相关 - 后续会支持

更多详见 [FAQ-ZH](https://wechaty.botorange.com/faq)
