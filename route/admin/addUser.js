// Joi
const Joi = require('joi')
// bcrypt
const bcrypt = require('bcrypt')
// 用户集合
const { User, validateUser } = require('../../model/user')

// add user
module.exports = async (req, res) => {
    // validate Joi rules
    try {
        await validateUser(req.body)
    } catch (err) {
        // if failed
        return res.redirect(`/admin/add/user?message=${err.message}`)
    }

    // check if there is this user in MongoDB
    const user = await User.findOne({
        email: req.body.email
    })
    if (user) {
        // 邮箱已被注册
        return res.redirect('/admin/add/user?message=Email is already be used')
    } else {
        // 加密密码
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt)
    }

    // add to MongoDB' blog
    await User.create(req.body)

    // redirect
    res.redirect('/admin/users')
}