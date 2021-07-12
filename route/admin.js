const express = require('express')
const admin = express.Router()

// login 
admin.post('/login', require('./admin/login'))

// render login page
admin.get('/login', require('./admin/loginPageRender'))

// logout
admin.get('/logout', require('./admin/logout'))


// 1. User
// render user list page
admin.get('/users', require('./admin/userPageRender'))

// add user
admin.post('/add/user', require('./admin/addUser'))

// render add user page
admin.get('/add/user', require('./admin/addUserPageRender'))

// edit user
admin.post('/edit/user', require('./admin/editUser'))

// render edit user page
admin.get('/edit/user', require('./admin/editUserPageRender'))

// remove user
admin.get('/remove', require('./admin/removeUser'))



// 2. Articles
// render articles list
admin.get('/articles', require('./admin/articleListPageRender'))


// render add article page
admin.get('/add/article', require('./admin/addArticlePageRender'))


// render edit article page
admin.get('/edit/article', require('./admin/editArticlePageRender'))


module.exports = admin