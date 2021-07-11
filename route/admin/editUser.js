// 用户集合
const { User, validateUser } = require('../../model/user')
// bcrypt
const bcrypt = require('bcrypt')

// edit user  
module.exports = async (req, res) => {
    // 接受查询用户的id参数
    const id = req.query.id
    // 接受输入内容
    const { username, email, identity, status } = req.body

    // 查找
    const user = await User.findOne({
        _id: id
    })

    // 密码比对
    const isEqual = await bcrypt.compare(req.body.password, user.password)
    if (isEqual) {
        // 密码比对成功，密码一致
        // 更新数据库
        await User.updateOne(
            { _id: id },
            // 修改除了密码外的其余字段
            {
                username: username,
                email: email,
                identity: identity,
                status: status
            }
        )
        // 重定向
        return res.redirect('/admin/users')
    } else {
        // 密码比对失败，密码不一致
        return res.redirect(`/admin/edit/user?id=${id}&message=Password is wrong, Can not edit this user's information`)
    }
}