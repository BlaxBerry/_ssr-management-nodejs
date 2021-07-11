// logout
// /admin/logout
module.exports = (req, res) => {
    // clear session
    req.session.destroy(() => {
        // clear cookie (express-session默认名)
        res.clearCookie('connect.sid');
        // redirect
        res.redirect('/admin/login')
    })
}