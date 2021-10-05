import React from "react";
import NewsContainer from "./NewsContainer";
import Navigation from "./Navigation";
import Pagination from "./Pagination";

function Homepage({ data, postsPerPage, totalPosts, paginate }) {
    
  return (
    <div>
        <Navigation/>
        <NewsContainer
            data={data}
        />
        <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
    </div>
  );
}

export default Homepage;
