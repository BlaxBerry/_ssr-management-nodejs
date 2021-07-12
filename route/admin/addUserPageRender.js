// render add user page
// /admin/add/user
module.exports = (req, res) => {
    // 添加标识，当前是users页面
    req.app.locals.nowPage = 'users'

    // URL 携带的错误参数
    const { message } = req.query;
    // 渲染错误信息到页面
    res.render('admin/add-user', {
        msg: message
    })
}