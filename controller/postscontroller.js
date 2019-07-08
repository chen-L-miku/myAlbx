const postsModule = require('../module/postsmodule.js') 

exports.getDataBase = (req,res)=>{
    let obj = req.query

    postsModule.getDataBase(obj,(err,data)=>{
        if(err){
            res.json({
                code:400,
                msg:'数据查找失败'
            })
        }else{
            res.json({
                code:200,
                mag:'数据查找成功',
                data:data
            })
        }
    })
}