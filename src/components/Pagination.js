import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <Nav>
            <ul>
                {pageNumbers.map(number => (
                    <a onClick={() => paginate(number)} href="#">
                    {number}
                    <li key={number} style={{textDecoration: 'none'}}></li>
                    </a>
                ))}
            </ul>
        </Nav>
    )
}

export default Pagination;

const Nav = styled.nav`
    ul {
        display: flex;
        justify-content: center;
        list-style: none;
    }

    a {
        font-size: 0.85rem;
        text-decoration: none;
        color: black;
        border: 1px solid black;
        margin: 0 8px;
        padding: 5px 10px;
    }

    a:hover {
        text-decoration: underline;
        background-color: #E5E5E5;
    }

    a:active {
        background-color: #E5E5E5;
    }
`