import React from 'react';
import { useParams } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Interactions from './SocialInteractions';
import Comments from './comment/CommentSection';
import { publicationDate } from './formatted-dates';

import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { BsArrowDown } from 'react-icons/bs';


const Post = ({ data }) => {
  const params = useParams();
  const posts = data.find(item => item.webTitle === params.id)

  console.log('one',posts)

  return (
    <PostContainer>
      <div className='wrapper'>
        <Navigation/>
        <h1>{posts.webTitle}</h1>
        <img className='thumbnail' src={posts.fields.thumbnail} alt={posts.webTitle}/>
        <div className="socialize">
          <p className='date'>Published {publicationDate(posts.webPublicationDate)}</p>
          <Interactions/>
        </div>
        <div className='story-details'>
          <p>{posts.fields.trailText}</p>
          <a href={posts.webUrl} target='_blank' rel="noreferrer" >
            <button className='read-more'>
              Read Full Story <BsArrowDown style={{marginLeft:'5px'}} size={12}/>
            </button>
          </a>
        </div>
        <hr/>
      </div>
      <Comments/>
    </PostContainer>
  );
}


export default Post;

const PostContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1680px;

  .wrapper {
    display: grid;
    place-items: center;
    padding-bottom: 5rem;
  }
  

  h1 {
    font-size: 1.7rem;
    text-transform: capitalize;
  }

  .thumbnail {
    width: 50%;
  }

  .date {
    color: #707070;
    font-size: 0.7rem;
    padding-right: 1rem;
  }

  .socialize {
    display: flex;
    flex-direction: start;
  }

  .story-details {
    width: 50rem;
  }

  .read-more {
    background: white;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    -webkit-box-shadow: 1px 4px 15px 3px #E0E0E0; 
    box-shadow: 1px 4px 15px 3px #E0E0E0;
  }

  .read-more:hover {
    background: #EDEDED;
    cursor: pointer;
    transition: 0.5s;
  }

  .read-more:active {
    font-weight: 700;
  }

  .read-more:focus {
    
  }

  hr {
    display: inline-block;
    height: 1px;
    border: 0;
    border-top: 1px solid #CEDFEF;
    margin: 1em 0;
    padding: 0;
  }

`