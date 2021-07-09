const e = require('express')
const express = require('express')

const admin = express.Router()


// login
admin.post('/login', (req, res) => {
    // get client form vale
    const { email, password } = req.body

    // server side form value validation
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', {
            status: 400,
            msg: 'Email Address or Password is WRONG,  will back to login page in 2s'
        });
    }

})
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