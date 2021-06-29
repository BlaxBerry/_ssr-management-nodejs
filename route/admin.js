const express = require('express')

const admin = express.Router()

// login page
admin.get('/login', (req, res) => {
    res.render('admin/login')
})



// user list
admin.get('/users', (req, res) => {
    res.render('admin/users')
})

// article list
admin.get('/articles', (req, res) => {
    res.render('admin/articles')
})




// add user
admin.get('/add/user', (req, res) => {
    res.render('admin/add-user')
})

// add article
admin.get('/add/article', (req, res) => {
    res.render('admin/add-article')
})




// edit user
admin.get('/edit/user', (req, res) => {
    res.render('admin/edit-user')
})

// edit article
admin.get('/edit/article', (req, res) => {
    res.render('admin/edit-article')
})

module.exports = admin