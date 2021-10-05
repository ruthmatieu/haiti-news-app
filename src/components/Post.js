import React from "react";
import { useParams, useRouteMatch } from 'react-router-dom';

const Post = ({ data }) => {
  const params = useParams();
  const posts = data.find(item => item.webTitle === params.id)

  console.log('one',posts)

  return (
    <div>
      <h1>{posts.webTitle}</h1>
      <img src={posts.fields.thumbnail}/>
    </div>
  );
}


export default Post;