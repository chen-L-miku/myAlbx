// 引入mysql模块
const mysql = require('mysql')
// 创建连接
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu',
    dateStrings:true
})
// 打开链接可以不用写,他会默认寻找最近创建的链接来使用
// 打开所有文章数据

exports.getDataBase = (params,callback) =>{
    // 创建sql语句
    var sql =
    `select posts.id,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id,users.nickname,categories.name
    from posts
    inner join users on posts.user_id = users.id
    inner join categories on posts.category_id = categories.id
    limit ${(params.pagenum-1)*params.pagesize},${params.pagesize}`
    connection.query(sql,(err,data)=>{
        if(err){
            callback(err)
        }else{
            sql = `select count(*) cnt from posts`
            connection.query(sql,(err1,data1)=>{
            
            if(err1){
                callback(err1)
            }
            else{
                callback(null,{data:data,data1:data1[0].cnt})
            }
            // console.log(data);
            })
        }
    })
}

