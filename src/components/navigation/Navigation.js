import React from "react";
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import { currentDay, currentMonth } from '../formatted-dates';

import styled from 'styled-components';
import breakpoint from '../../breakpoints';


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
        <Link to='/' className='logo'><img src={logo} alt="logo"/></Link>
        <div>
          <Link><button className='login-btn'>Login</button></Link>
        </div>
        
    </Container>
  );
}

export default Navigation;

const Container = styled.nav`


    display: none;

    .logo img {
      
      display: block;
      margin-left: auto;
      margin-right: auto;
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

    .login-btn {
      background: white;
      border: none;
      border-radius: 5px;
      padding: 10px 30px;
      margin-top: 11px;
      -webkit-box-shadow: 1px 4px 15px 3px #E0E0E0; 
      box-shadow: 1px 4px 15px 3px #E0E0E0;
    }

    @media only screen and ${breakpoint.device.sm} {
      //background: pink;

      
    }
  
    @media only screen and ${breakpoint.device.md} {
      //background: orange;
    }
  
    @media only screen and ${breakpoint.device.lg} {
      //background: cyan;
      display: flex;
      justify-content: space-around;
      padding: 2rem 0;

      .logo img {
        width: 500px;
      }

      .login-btn {
        margin-top: 2.2rem;
      }
    }
  
    @media only screen and ${breakpoint.device.xl} {
      //background: red;

      .logo {
        width: 45%;
      }

      .logo img {
        width: 600px;
      }

      .login-btn {
        margin-top: 50%;
      }
    }

    @media only screen and ${breakpoint.device.xxl} {
      justify-content: space-between;
      margin: 0 100px;

     
      
    }
`