// 用户集合
const { Article } = require('../../model/article')

// render edit article page  /admin/edit/article
module.exports = async (req, res) => {
    // 添加标识，当前是articles页面
    req.app.locals.nowPage = 'articles'

    // 接受查询文章的id参数
    const { id } = req.query;
    // 通过判断是否存在路由参数id
    if (id) {
        // 若携带了id参数,则是修改 article
        // get the article according the parmas of request URL
        let article = await Article.findOne({
            _id: id
        }).populate('author').lean()
        // render the edit user page with data
        // URL 携带的错误参数
        const { message } = req.query;
        res.render('admin/edit-article', {
            article: article,
            msg: message
        })
    }
    else {
        // 若不携带id,则是新增 article
        res.redirect('/admin/add/article')
    }
}