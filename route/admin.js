const express = require('express')

const admin = express.Router()

// 导入用户集合的规则
const { User } = require('../model/user')


// login
admin.post('/login', async (req, res) => {
    // get client form vale
    const { email, password } = req.body

    // server side form value validation
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', {
            status: 400,
            msg: 'Email Address or Password is WRONG,  will back to login page in 2s'
        });
    }

    // according to email to check unique user info
    let user = await User.findOne({ email })
    // if there is that unique one, user is  an obj,or a {}
    if (user) {
        if (password == user.password) {
            res.send({
                status: 200,
                msg: 'login succeed'
            })
        } else {
            // wrong password
            res.status(400).render('admin/error', {
                status: 400,
                msg: 'Email Address or Password is WRONG,  will back to login page in 2s'
            });
        }
    } else {
        // no such email
        res.status(400).render('admin/error', {
            status: 400,
            msg: 'Cannot find such user,  will back to login page in 2s'
        });
    }

})
// show static login page
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