import React, {useState, useEffect} from 'react';
import articleContent from './article-content';
import ArticlesList from "../components/ArticlesList";
import Page404 from "./Page404";
import axios from "axios";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

    useEffect(()=>{
        const fetchData = async()=>{
            const resp = await axios.get(`http://localhost:8005/api/articles/${name}`)
            setArticleInfo(resp.data);
        }
        fetchData();
    },[name])

    if (!article) return <Page404/>

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName={name} setArticleInfo={setArticleInfo} upvotes={articleInfo.upvotes}/>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;
