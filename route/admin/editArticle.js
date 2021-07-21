// 用户集合
const { Article } = require('../../model/article')

// edit user  
module.exports = (req, res) => {
    // 接受查询文章的id参数
    const { id } = req.query
    // 接受输入内容
    const { title, content } = req.body
    // 修改
    Article.updateOne(
        { _id: id },
        {
            title: title,
            content: content
        }).then(() => {
            // 重定向
            res.redirect('/admin/articles')
        })

}