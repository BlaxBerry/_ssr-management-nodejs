// mongoose
const mongoose = require('mongoose')

// 文章集合规则
const Article = mongoose.model('Article', mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 4,
        maxlength: 50
    },
    // 关联集合
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    // 封面
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
}))

module.exports = {
    Article
}