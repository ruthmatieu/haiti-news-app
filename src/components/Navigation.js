import React from "react";
import logo from "./logo.png";

import styled from 'styled-components';
import breakpoint from '../breakpoints';


function Navigation() {
    //console.log('homepage', data)
  return (
    <Container>
        <p>Today's Paper</p>
        <img src={logo} alt="logo"/>
        <p>current weater</p>
    </Container>
  );
}

export default Navigation;

const Container = styled.nav`
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    max-width: 1680px;
    display: flex;
    justify-content: space-between;
`