// 引入express模块  
const express = require('express')
// 引入路由模块
const router = require('./router/indexRouter.js')
// 引入ejs模块
const ejs = require('ejs')
// 创建应用
const app = express()
// 引入body-parser模块
const bodyParser = require('body-parser')

// 添加指定端口监听
app.listen(3000, () => {
    console.log('is http://127.0.0.1:3000');

})
// ejs模块
app.set('view engine','ejs')
app.set('views','views')

// 添加静态资源拖管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

// 添加body-parser模块
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
    
    // 让APP来使用这个路由进行所有用户的请求和管理
app.use(router)