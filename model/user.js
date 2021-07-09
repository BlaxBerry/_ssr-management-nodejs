// mongoose
const mongoose = require('mongoose')

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
    },
    status: {
        type: Number,
        default: 0  // 1:forbidden 0: can be used
    }

}))

// to create the first User info(init user)
// User.create({
//     username: 'Andy',
//     email: 'andy@qq.com',
//     password: '123456',
//     identity: 'admin',
//     status: 0
// })
//     .then(() => { console.log('new user is created') })
//     .catch(() => { console.log('falied to create a new user')})


module.exports = {
    User
}