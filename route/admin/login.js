// 导入用户集合的规则
const { User } = require('../../model/user')
// bcrypt
const bcrypt = require('bcrypt')

// Route login 
// /admin/login
module.exports = async (req, res) => {
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
        // bcrypt compare password
        const isEqual = await bcrypt.compare(password, user.password)
        if (isEqual) {
            // 储存登陆用户的信息到session中
            req.session.username = user.username
            // res.send({
            //     status: 200,
            //     msg: 'login succeed'
            // })
            // route redirect to users list page
            res.redirect('/admin/users');
            // art-template 公用变量（用户名显示在右上角）
            req.app.locals.userInfo = user;
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
}