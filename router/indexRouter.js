// 引入控制器文件
const indexController = require('../controller/indexController.js')
// 引入express文件
const express = require('express')
// 添加应用,router方法构建出来的router对象可以当中间件使用
// 引入posts控制器
const postsController = require('../controller/postscontroller.js')
const router = express.Router()

router.get('/',indexController.getIndex)
router.get('/list',indexController.getList)
router.get('/detail',indexController.getDetail)

// 引入管理员页面
router.get('/admin',indexController.getAdminIndex)
router.get('/comments',indexController.getAdminComments)
router.get('/categories',indexController.getAdminCategories)
router.get('/nav-menus',indexController.getAdminNavMenus)
router.get('/password-reset',indexController.getAdminPasswordReset)
router.get('/post-add',indexController.getAdminPostAdd)
router.get('/posts',indexController.getAdminPosts)
router.get('/profile',indexController.getAdminProfile)
router.get('/settings',indexController.getAdminSettings)
router.get('/slides',indexController.getAdminSlides)
router.get('/users',indexController.getAdminUsers)
router.get('/login',indexController.getAdminLogin)
router.get('/getDataBase',postsController.getDataBase)

module.exports = router