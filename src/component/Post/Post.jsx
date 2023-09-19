import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
      const {id,title,body}=post;
      const navigate =useNavigate();

      const postStyle={
            border:'2px solid yellow',
            padding:'5px',
            borderRadius:'20px'
      }
      const handleShowDitils=()=>{
            navigate(`/post/${id}`);
      }
      return (
            <div style={postStyle}>
                  <h3>Post Id:{id}</h3>
                  <p>{title}</p>
                  <Link to={`/post/${id}`}>Post Distils</Link>
                  <button onClick={handleShowDitils}>Click to see ditils</button>
                  
            </div>
      );
};

export default Post;