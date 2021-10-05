import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

import SocialInteractions from './SocialInteractions';

function NewsContainer({ data }) {
    console.log(data)
    const formatDate = (date) => {
        const newDdate = new Date(date);
        const UTCDate = (newDdate.getMonth()+1) + '/'+ newDdate.getDate() + '/' + newDdate.getFullYear();
        return UTCDate
    }
    
  return (
    <Container>
        {data.map(item=> (
            <Link to={`/article/${item.id}`}>
                <div key={item.id} className="wrapper">
                    <img src={item.fields.thumbnail} alt="" style={{width: '100%'}}/>
                    <div>
                        <h4>{item.webTitle}</h4>
                        <p>{item.fields.trailText}</p>
                        <div style={{display: 'flex'}}>
                            <p>{formatDate(item.webPublicationDate)}</p>
                            <SocialInteractions/>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </Container>
  );
}

export default NewsContainer;

const Container = styled.div`
    width: 85%;
    overflow: hidden;
    margin: 0 auto;
    max-width: 1680px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .wrapper {
        max-width: 30rem;
        margin: 0 10px;
    }

    .wrapper h4 {
        text-transform: capitalize;
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 100%;
    }
`