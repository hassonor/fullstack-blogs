const logic = require("../business-logic-layer/article-logic");

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments:[],
    },
    'learn-node': {
        upvotes: 0,
        comments:[],
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments:[],
    },
}

export const voteAnArticle = async(req, res) =>{
    try{
        const articleName = req.params.name;

        articlesInfo[articleName].upvotes +=1;
        res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
    }
    catch(err){
        console.log(err);
        return res.status(400).send("Error. Please Try Again.");
    }
}

export const addCommentToArticle = async(req, res) =>{
    try{
        const {username, text} = req.body;
        const articleName = req.params.name;

        articlesInfo[articleName].comments.push({username, text});

        res.status(200).send(articlesInfo[articleName]);
    }
    catch(err){
        console.log(err);
        return res.status(400).send("Error. Please Try Again.");
    }
}

export const getArticle = async(req, res) =>{
    try{
        const articleName = req.params.name;

        const articleInfo = await logic.getArticleAsync(articleName);

        res.status(200).json(articleInfo);
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Error. Please Try Again.");
    }
}


