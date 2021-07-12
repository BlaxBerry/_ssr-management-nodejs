// 用户集合
const { User } = require('../../model/user')

// render user list page  /admin/users
module.exports = async (req, res) => {
    // 添加标识，当前是users页面
    req.app.locals.nowPage = 'users'

    // 客户端传来的请求页数,若没传默认是1
    let page = req.query.page || 1;
    // 每一页显示的数据数
    let pageSize = 5;
    // 数据总数
    const count = await User.countDocuments({})
    // 总页数
    let total = Math.ceil(count / pageSize)
    // 每页数据的开始位置
    let start = (page - 1) * pageSize;

    // get all list from MongoDB
    let users = await User.find({}).limit(pageSize).skip(start)
    // render list in template
    res.render('admin/users', {
        users: users,
        page: page,
        total: total
    })
}
