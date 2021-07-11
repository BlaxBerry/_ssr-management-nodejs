// 用户集合
const { User } = require('../../model/user')
// render user list page
// /admin/users
module.exports = async (req, res) => {
    // get all list from MongoDB
    let users = await User.find({})
    // render list in template
    res.render('admin/users', {
        users: users
    })
}
