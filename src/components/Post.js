import React,  {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

const Post = ({match}) => {
  const key = 'c52e1742-6512-4f0d-8c25-fbd9b39e36a8';

  useEffect(()=> {
    fetchItem();
    console.log(match)
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://content.guardianapis.com/search?show-fields=trailText%2Cthumbnail&id=${match.params.id}&api-key=${key}`)
    const item = await fetchItem.json();
    console.log(item)
  }
  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}


export default Post;