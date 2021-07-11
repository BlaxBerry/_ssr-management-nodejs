// Joi
const Joi = require('joi')
// bcrypt
const bcrypt = require('bcrypt')
// 用户集合
const { User } = require('../../model/user')

// add user
module.exports = async (req, res) => {
    // Joi rules
    const schema = {
        username: Joi.string()
            .min(2).max(25)
            .required()
            .error(new Error('userName does not conform to the format specification')),
        email: Joi.string()
            .email()
            .required()
            .error(new Error('Email does not conform to the format specification')),
        password: Joi.string()
            .regex(/^[0-9a-zA-Z]{3,30}$/)
            .required()
            .error(new Error('Password does not conform to the format specification')),
        identity: Joi.string()
            .valid('Normal', 'Admin')
            .required()
            .error(new Error('Identity does not conform to the format specification')),
        status: Joi.number()
            .valid(0, 1)
            .required()
            .error(new Error('Status does not conform to the format specification'))
    };

    try {
        // validate
        await Joi.validate(req.body, schema)
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