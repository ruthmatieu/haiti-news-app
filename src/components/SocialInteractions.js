import React, { useState } from "react";
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';

function SocialInteractions() {
    //console.log('homepage', data)
    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const [love, setLove] = useState(0);
    const [isLoved, setIsLoved] = useState(false);

    const [dislike, setDislike] = useState(0);
    const [isDisliked, setIsDisliked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like-1: like+1)
        setIsLiked(!isLiked)
    }

    const dislikeHandler = () => {
        setDislike(isDisliked ? dislike-1: dislike+1)
        setIsDisliked(!isDisliked)
    }

    const loveHandler = () => {
        setLove(isLoved ? love-1: love+1)
        setIsLoved(!isLoved)
    }

  return (
    <div style={{display: 'flex'}}>
        <div style={{display: 'flex'}}>
            <AiFillLike className="like-btn" onClick={likeHandler}/>
            <p>{like}</p>
        </div>
        <div style={{display: 'flex'}}>
            <AiFillDislike className="like-btn" onClick={dislikeHandler}/>
            <p>{dislike}</p>
        </div>
        <div style={{display: 'flex'}}>
            <FcLike className="love-btn" onClick={loveHandler}/>
            <p>{love}</p>
        </div>
    </div>
  );
}

export default SocialInteractions;