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
    <div style={{margin: '0 auto', maxWidth: '1680px', width: '100%', overflow: 'hidden'}}>
      <Navigation/>
      <PostContainer>
        <div className='wrapper'>
          <h1>{posts.webTitle}</h1>
          <img className='thumbnail' src={posts.fields.thumbnail} alt={posts.webTitle}/>
          <div className="socialize">
            <p className='date'>Published {publicationDate(posts.webPublicationDate)}</p>
            <Interactions/>
          </div>
          <div className='story-details'>
            <p className='trail-text'>{posts.fields.trailText}...</p>
            <div style={{display: 'grid', placeItems: 'center'}}>
              <a href={posts.webUrl} target='_blank' rel="noreferrer" >
                <button className='read-more'>
                  Read Full Story <BsArrowDown style={{marginLeft:'5px'}} size={12}/>
                </button>
              </a>
            </div>
          </div>
        </div>
      <Comments/>
    </PostContainer>

    </div>
    
  );
}


export default Post;

const PostContainer = styled.div`
  
  border: 1px solid #DCDCDC;

  .wrapper {
    padding-bottom: 5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    
  }
  

  h1 {
    text-align: center;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding-bottom: 1rem;
  }

  .thumbnail {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .date {
    color: #707070;
    font-size: 0.7rem;
    padding-right: 1rem;
  }

  .socialize {
    display: flex;
    justify-content: space-around;
  }

  .story-details {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
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


  @media only screen and ${breakpoint.device.sm} {
    //background: pink;

    .wrapper {
      display: grid;
      place-items: center;
    }

    h1 {
      width: 300px;
      font-size: 1.5rem;

    }
  }

  @media only screen and ${breakpoint.device.md} {
    //background: orange;

    

    h1 {
      width: 500px;
    }

    .thumbnail {
      width: 500px;
    }

    .story-details {
      width: 500px;
    }
  }

  @media only screen and ${breakpoint.device.lg} {
    //background: cyan;

    

    h1 {
      width: 50%;
      font-size: 1.7rem;
    }

    .thumbnail {
      width: 50%;
    }

    .story-details {
      width: 50%;
    }
  }

  @media only screen and ${breakpoint.device.xl} {
    //background: yellow;

    h1 {
      width: 40%;
      font-size: 1.7rem;
    }
  }

`