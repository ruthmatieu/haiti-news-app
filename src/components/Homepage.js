import React from "react";
import PostsList from "./PostsList";
import Navigation from "./navigation/Navigation";
import Search from "./navigation/Search";
import Pagination from "./Pagination";

function Homepage({ data, postsPerPage, totalPosts, paginate }) {
    
  return (
    <div>
        <Navigation />
        {/* <Search /> */}
        <PostsList
            data={data}
        />
        <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} />
    </div>
  );
}

export default Homepage;
