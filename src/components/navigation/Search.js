import React, { useState } from 'react';

import styled from 'styled-components';
import breakpoint from '../../breakpoints';


const Search = () => {
    const [ search, setSearch ] = useState('')

    const changeHandler = e => {
        setSearch(e.target.value)
    };

    const submitHandler = () => {
        
    };

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input
                type='text'
                value={search}
                onChange={changeHandler}
            />
            <button type='submit'>Search</button>
        </form>
    </div>
  );
}


export default Search;