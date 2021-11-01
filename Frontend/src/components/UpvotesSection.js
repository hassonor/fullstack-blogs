import axios from "axios";

const UpvotesSection = ({articleName, upvotes, setArticleInfo}) => {
    const upvoteArticle = async () =>{
        const resp = await axios.post(`http://localhost:8005/api/articles/${articleName}/upvote`)
        setArticleInfo(resp.data);
    }
    return( <div id="upvotes-section">
        <button onClick={()=>  upvoteArticle()}>Add Upvote</button>
        <p>This post has been up-voted {upvotes} times.</p>
    </div>)
}

export default UpvotesSection;
