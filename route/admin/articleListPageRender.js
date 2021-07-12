// 文章规则
const { Article } = require('../../model/article')

// render articles list   /admin/articles
module.exports = async (req, res) => {
    // 添加标识，当前是articles页面
    req.app.locals.nowPage = 'articles'

    // get all list from MongoDB
    // fixed  Maximum call stack size exceeded  by .lean()
    const articles = await Article.find().populate('author').lean()

    // res.send(articles)
    // render
    res.render('admin/articles', {
        articles: articles
    })
}