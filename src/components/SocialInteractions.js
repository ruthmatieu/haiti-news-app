import React, { useState } from "react";
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';

import styled from 'styled-components';
import breakpoint from '../breakpoints';

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
    <Container>
        <div className='like'>
            <div style={{display: 'flex'}}>
                <AiFillLike className="like-btn" onClick={likeHandler}/>
                <p style={{margin: '0'}}>{like}</p>
            </div>
            
        </div>
        <div className='like'>
            <div style={{display: 'flex'}}>
                <AiFillDislike className="like-btn" onClick={dislikeHandler}/>
                <p style={{margin: '0'}}>{dislike}</p>
            </div>
        </div>
        <div className='like'>
            <div style={{display: 'flex'}}>
                <FcLike className="love-btn" onClick={loveHandler}/>
                <p style={{margin: '0'}}>{love}</p>
            </div>
        </div>
    </Container>
  );
}

export default SocialInteractions;

const Container = styled.div`
    display: flex;

    .like {
        display: grid;
        place-items: center;
    }
`