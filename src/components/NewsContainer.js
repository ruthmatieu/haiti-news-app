import React from "react";
import styled from 'styled-components';
import breakpoint from '../breakpoints';

import SocialInteractions from './SocialInteractions';

function NewsContainer({ data }) {
    console.log('NewsContainer', data)
  return (
    <Container>
      {data.map(item=> (
          <div key={item.id} className="wrapper">
            <img src={item.fields.thumbnail} alt="" style={{width: '100%'}}/>
            <div>
                <h4>{item.webTitle}</h4>
                <p>{item.fields.trailText}</p>
                <div style={{display: 'flex'}}>
                    <p>{item.webPublicationDate}</p>
                    <SocialInteractions/>
                </div>
            </div>
          </div>
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

    @media only screen and ${breakpoint.device.sm} {
        width: 100%;
    }
`