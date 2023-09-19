import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import './PostDitils.css'

const PostDitils = () => {
      const post = useLoaderData();
      // const {postId}= useParams()
      const navigate = useNavigate();
      const {title,body,id}=post;
      const handleGoBack= ()=>{
            navigate(-1)
      }
      return (
            <div className="post">
                  <h4>post distils About: {id}</h4>
                  <p>Title:{title}</p>
                  <p><small>{body}</small></p>
                  <button onClick={handleGoBack}>Go Back</button>
            </div>
      );
};

export default PostDitils;