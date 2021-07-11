const express = require('express')
const admin = express.Router()
// 导入用户集合的规则
const { User } = require('../model/user')


// login 
admin.post('/login', require('./admin/login'))

// logout
admin.get('/logout', require('./admin/logout'))

// render login page
admin.get('/login', require('./admin/loginPageRender'))



// render user list page
admin.get('/users', require('./admin/userPageRender'))

// render articles list
admin.get('/articles', require('./admin/articleListPageRender'))



// add user
admin.post('/add/user', require('./admin/addUser'))

// render add user page
admin.get('/add/user', require('./admin/addUserPageRender'))

// render add article page
admin.get('/add/article', require('./admin/addArticlePageRender'))



// render edit user page
admin.get('/edit/user', require('./admin/editUserPageRender'))

// render edit article page
admin.get('/edit/article', require('./admin/editArticlePageRender'))



module.exports = admin