// login interception
const loginGuard = (req, res, next) => {
    // 判断地址是否是login页面 && session对象中是否存有自定义属性（即是否登陆）
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login')
    } else {
        next();
    }
}
module.exports = loginGuard