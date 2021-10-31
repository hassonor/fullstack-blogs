require("../data-access-layer/dal");
const Article = require("../models/article-model.js")


const getArticleAsync = (articleName) => {
    return new Promise((resolve, reject) => {
        Article.findOne({name: articleName}, (err, article) => {
            if (err) {
                reject(err);
            } else {
                resolve(article);
            }
        });
    })
}




module.exports = {
    getArticleAsync
}
