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

##### 快速开始
  ```
  git clone https://github.com/nvnvyezi/wechat-timing.git
  npm install
  npm run start
  ```
可以在src/assets/base/config.js 配置定时发送消息以及要发送的对象
不想每次登陆的话，在index.js里面配置new weachaty({name: ''}),信息保存在 *.memory-card.json 中


##### 功能：
- 消息处理：文本消息使用机器人回复
- 定时发送天气预报，每日一句消息（可自己新添/修改）
- ~~群管理：自动入群，拉人，踢人~~
- ~~自动处理好友请求~~



##### FAQ

如果登陆失败，可以去查看是否被限制登陆 https://wx.qq.com 。被限制登陆可以采取其他的接入方式，详情请查看: https://github.com/wechaty/wechaty-getting-started/blob/master/README-zh.md