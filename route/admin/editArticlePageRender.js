// render edit article page
// /admin/edit/article
module.exports = (req, res) => {
    // 添加标识，当前是articles页面
    req.app.locals.nowPage = 'articles'

    res.render('admin/edit-article')
}