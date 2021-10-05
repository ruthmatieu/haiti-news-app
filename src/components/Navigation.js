import React from "react";
import { Link } from 'react-router-dom';
import logo from "./logo.svg";
import { currentDay, currentMonth } from './Date';

import styled from 'styled-components';
import breakpoint from '../breakpoints';


const Navigation = () => {
  const today = new Date();
  const day = today.getUTCDay()+1;
  const month = today.getMonth()+1;
  const date = today.getDate();
  const year = today.getFullYear()

  return (
    <Container>
      <div className="wrapper">
        <div className='date'>
          <p className='date-today'>{currentDay(day)}, {currentMonth(month)} {date}, {year}</p>
          <p className='date-title'>Today's Paper</p>
        </div>
      </div>
        <img src={logo} alt="logo"/>
        <div className='weather'>
          <p>current weater</p>
        </div>
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
    justify-content: space-around;
    padding: 2rem 0;

    img {
      width: 28%;
    }

    .wrapper {
      display: grid;
      place-items: center;
    }

    .date-today, .date-title {
      font-size: 0.7rem;
      margin: 0;
    }

    .date-today {
      font-weight: 900;
    }
`