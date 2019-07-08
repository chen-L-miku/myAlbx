$(function(){
    // 定义变量用来分页
    // pagenum代表当前的页码
    var pagenum = 1;
    // pagesize代表每页显示的记录数
    var pagesize = 3;
    // 发起ajax请求，请求所有文章数据
    init()
   function init (){

        $.ajax({
            // 请求类型
            type:'get',
            // ?号之前,端口号之后的连接
            url:'/getDataBase',
            data:{
                pagenum : pagenum,
                pagesize :pagesize
            },
            // 使用json方法处理数据
            dataType:'json',
            // 数据请求回来后执行的函数
            success:function(res){
                // console.log(res)
                // 生成文章数据结构
                var html = template('postListTemp',res.data)
                // console.log(html);
                
                $('tbody').html(html)
                // 生成分页结构
                setPage(Math.ceil(res.data.data1 / pagesize))
                // console.log(res.data);
                
        }
        
    })
   }
    function setPage(cente) {
        $(".pagination").bootstrapPaginator({
            //设置版本号
            bootstrapMajorVersion: 3,
            // 显示第几页
            currentPage: pagenum,
            // 总页数
            totalPages: cente,
            //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
            onPageClicked: function (event,originalEvent,type,page) {
                pagenum = page
                init()
            }
        })
    }
})
