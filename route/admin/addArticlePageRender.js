// render add article page  /admin/add/article
module.exports = (req, res) => {
    // 添加标识，当前是articles页面
    req.app.locals.nowPage = 'articles'

    res.render('admin/add-article')
}