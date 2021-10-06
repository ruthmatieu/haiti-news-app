import React from "react";

import styled from 'styled-components';
import breakpoint from '../breakpoints';

import PostsList from "./PostsList";
import Navigation from "./navigation/Navigation";
import Search from "./navigation/Search";
import Pagination from "./Pagination";

function Homepage({ data, postsPerPage, totalPosts, paginate }) {
    
  return (
    <HomeDiv>
        <Navigation />
        {/* <Search /> */}
        <PostsList
            data={data}
        />
        <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} />
    </HomeDiv>
  );
}

export default Homepage;

const HomeDiv = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1680px;
  border: 1px solid #DCDCDC;
  //background: red;

  @media only screen and ${breakpoint.device.sm} {
    //background: pink;
  }

  @media only screen and ${breakpoint.device.md} {
    //background: orange;
  }

  @media only screen and ${breakpoint.device.lg} {
    //background: cyan;
  }

  @media only screen and ${breakpoint.device.xl} {
    //background: yellow;
  }
  
`
