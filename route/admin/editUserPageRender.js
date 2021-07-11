// 用户集合
const { User } = require('../../model/user')

// render edit user page  /admin/add/user
module.exports = async (req, res) => {
    // 接受查询用户的id参数
    const { id } = req.query;
    // 通过判断是否存在路由参数id
    if (id) {
        // 若携带了id参数,则是修改 user
        // get the user according the parmas of request URL
        let user = await User.findOne({
            _id: id
        })
        // render the edit user page with data
        // URL 携带的错误参数
        const { message } = req.query;
        res.render('admin/edit-user', {
            user: user,
            msg: message
        })
    } else {
        // 若不携带id,则是新增 user
        res.redirect('/admin/add/user')
    }

}