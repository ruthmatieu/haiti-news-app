import React from "react";
import { useParams } from 'react-router-dom';

const Post = ({ data }) => {
  const params = useParams();
  const news = data.filter(item => `${item.id}` === params.id);

  console.log('post pros', data)

  return (
    <div>
      i am the post comp {news}
      {
       data
        .filter(item => `${item.id}` === params.id)
        .map(item => (
          <div key={item.id}>
            <h2>{item.webTitle}</h2>
          </div>
        ))
      }
    </div>
  );
}

export default Post;