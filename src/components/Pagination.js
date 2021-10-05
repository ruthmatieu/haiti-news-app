import React from 'react';

const Pagination = (props) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++){
        pageNumbers.push(i);
        console.log(pageNumbers)
    }
    console.log('pg postperpage', props.postsPerPage)
    console.log('pg totalpost', props.totalPosts)

    return (
        <nav>
            <ul style={{display: 'flex', listStyle: 'none'}}>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => props.paginate(number)} href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;