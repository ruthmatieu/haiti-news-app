import React from "react";
import logo from "./logo.svg";
import { currentDay, currentMonth } from './Date';

import styled from 'styled-components';
import breakpoint from '../breakpoints';


function Navigation() {
  const today = new Date();
  const day = today.getUTCDay()+1;
  const month = today.getMonth()+1;
  const date = today.getDate();
  const year = today.getFullYear()

  return (
    <Container>
      <div>
        <p style={{fontWeight: '900', fontSize: '0.7rem'}}>{currentDay(day)}, {currentMonth(month)} {date}, {year}</p>
        <p style={{fontSize: '0.7rem'}}>Today's Paper</p>

      </div>
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