// render login page 
// /admin/login
module.exports = (req, res) => {
    // 添加标识，当前是users页面
    req.app.locals.nowPage = 'users'

    res.render('admin/login')
}