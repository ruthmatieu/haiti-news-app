import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Post from "./components/Post";

const App = () => {
  document.title = 'All News Ayiti'
  const key = 'c52e1742-6512-4f0d-8c25-fbd9b39e36a8';
  const [ posts, setPosts ] = useState([]);
  //current page
  const [ currentPage, setCurrentPage ] = useState(1);
  //limit page to 12 posts per page
  const [ postsPerPage ] = useState(12);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await fetch(`https://content.guardianapis.com/search?show-fields=trailText%2Cthumbnail&order-by=newest&page-size=100&q=haiti&api-key=${key}`)
      .then(res => res.json())
      .then(data => setPosts(data.response.results))
      .catch(err => console.log(err))
    }
      fetchData()
  }, []);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost);

  // changes page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Homepage data={currentPosts} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> 
        </Route>
        <Route path='/:id' component={Post}/>
      </Switch>
    </div>
  );
}

export default App;
