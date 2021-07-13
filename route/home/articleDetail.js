const { Article } = require('../../model/article')

// home article detail  /home/article
module.exports = async (req, res) => {
    const id = req.query.id;

    // find data in MongoDB
    const article = await Article.findOne({
        _id: id
    }).populate('author').lean()

    // render
    res.render('home/articleDetail', {
        article: article
    })
}