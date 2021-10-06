import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

import { publicationDate } from './formatted-dates';

import SocialInteractions from './SocialInteractions';


function PostsList({ data, loading }) {
    //console.log(loading)

    // if (loading) {
    //     return <h2>Loading...</h2>
    // }
  return (
    <Container>
        {data.map(item=> (
            <Link to={`/article/${item.webTitle}`} style={{textDecoration: 'none', color: 'black'}} key={item.id}>
                <div className="wrapper">
                    <img src={item.fields.thumbnail} alt="" style={{width: '100%'}}/>
                    <div>
                        <h4>{item.webTitle}</h4>
                        <p className='trail-text'>{item.fields.trailText}...</p>
                        <div className='interaction-date'>
                            <p className='formatted-date'>Published {publicationDate(item.webPublicationDate)}</p>
                            {/* <SocialInteractions/> */}
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </Container>
  );
}

export default PostsList;

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    max-width: 1680px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .wrapper {
        max-width: 30rem;
        margin: 0 10px;
        padding-bottom: 50px;
    }

    .wrapper h4 {
        text-transform: capitalize;
    }

    h4 {
        font-size: 1rem;
        margin: 0;
        padding-top: 1rem;
    }

    .trail-text {
        font-size: 0.85rem;
        margin: 0;
        padding-top: 1rem;
    }

    .interaction-date {
        display: flex;
    }

    .formatted-date {
        color: #707070;
        font-size: 0.7rem;
        padding-right: 1rem;
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 100%;
    }
`