// mongoose
const mongoose = require('mongoose')
// Joi
const Joi = require('joi')


// 用户集合规则
const User = mongoose.model('User', mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 2,
        maxlength: 25
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        // admin: super
        // normal: normal user
    },
    identity: {
        type: String,
        required: true,
        // normal: normal user; admin: super user
    },
    status: {
        type: Number,
        default: 0  // 1:forbidden 0: allowed
    }

}))

// 验证用户信息
// user info validattion
const validateUser = (userData) => {
    // Joi validation rules
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

    // to validate
    return Joi.validate(userData, schema)
}


// // to create the first User info(init user)
// async function createTextUser() {
//     // bcrypt
//     const bcrypt = require('bcrypt')
//     const salt = await bcrypt.genSalt(10)
//     const pass = await bcrypt.hash('123456', salt)
//     User.create({
//         username: 'Andy',
//         email: 'andy@qq.com',
//         password: pass,
//         identity: 'admin',
//         status: 0
//     }).then(() => { console.log('new user is created') })
//         .catch(() => { console.log('falied to create a new user') })

// }
// createTextUser()


module.exports = {
    User,
    validateUser
}