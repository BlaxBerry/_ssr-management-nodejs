// 用户集合
const { User } = require('../../model/user')

// remove user 
module.exports = async (req, res) => {
    // get user id 
    const id = req.query.id;
    // remove user in MongoDB
    await User.findOneAndDelete({
        _id: id
    })
    // redirect
    res.redirect('/admin/users')
}