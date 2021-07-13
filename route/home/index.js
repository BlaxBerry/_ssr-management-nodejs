const { Article } = require('../../model/article')

// home articles list   /home/
module.exports = async (req, res) => {
    // get list from MongoDB
    const articles = await Article.find().populate('author').lean()
    // res.send(articles)
    res.render('home/index', {
        articles: articles
    })
}