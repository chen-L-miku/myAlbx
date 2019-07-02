// 引入fs模块
const fs = require('fs')
// 添加路由配置
const path = require('path')
// 读取前台页面,并将其暴露
module.exports.getIndex = (req, res) => {
    fs.readFile(__dirname + '/../views/index.ejs', (err, data) => {
        if (err) return console.log(err);
        console.log(data);

        res.end(data)
    })
}
module.exports.getList = (req, res) => {
    fs.readFile(__dirname + '/../views/list.ejs', (err, data) => {
        if (err) return console.log(err);
        console.log(data);

        res.end(data)
    })
}
module.exports.getDetail = (req, res) => {
    fs.readFile(__dirname + '/../views/detail.ejs', (err, data) => {
        if (err) return console.log(err);
        console.log(data);

        res.end(data)
    })
}




// 管理员页面
module.exports.getAdminIndex = (req, res) => {
    res.render('admin/index.ejs')
}
module.exports.getAdminComments = (req, res) => {
    res.render('admin/comments.ejs')
}
module.exports.getAdminCategories = (req, res) => {
    res.render('admin/categories.ejs')
}
module.exports.getAdminNavMenus = (req, res) => {
    res.render('admin/nav-menus.ejs')
}
module.exports.getAdminPasswordReset = (req, res) => {
    res.render('admin/password-reset.ejs')
}
module.exports.getAdminPostAdd = (req, res) => {
    res.render('admin/post-add.ejs')
}
module.exports.getAdminPosts = (req, res) => {
    res.render('admin/posts.ejs')
}
module.exports.getAdminProfile = (req, res) => {
    res.render('admin/profile.ejs')
}
module.exports.getAdminSettings = (req, res) => {
    res.render('admin/settings.ejs')
}
module.exports.getAdminSlides = (req, res) => {
    res.render('admin/slides.ejs')
}
module.exports.getAdminUsers = (req, res) => {
    res.render('admin/users.ejs')
}

module.exports.getAdminLogin = (req, res) => {
    fs.readFile(__dirname + '/../views/admin/login.ejs', (err, data) => {
        if (err) return console.log(err);
        console.log(data);

        res.end(data)
    })
}
    // fs.readFile(__dirname + '/../views/admin/index.ejs', (err, data) => {
    //     if (err) return console.log(err);
    //     console.log(data);

        // res.end(data)
    // })
