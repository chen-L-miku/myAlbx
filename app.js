// 引入express模块  
const express = require('express')
// 引入fs模块
const fs =require('fs')

// 创建应用
const app = express()
// 添加指定端口监听
app.listen(3000,()=>{
    console.log('is http://127.0.0.1:3000');
    
})
// 添加静态资源拖管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
// 添加路由配置
app.get('/',(req,res)=>{
    fs.readFile(__dirname+'/views/index.html',(err,data)=>{
        if(err) return console.log('404');
        res.end(data)
    })
})