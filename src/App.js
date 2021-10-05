import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Post from "./components/Post";

function App() {
  const key = 'c52e1742-6512-4f0d-8c25-fbd9b39e36a8'
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
      fetch(`https://content.guardianapis.com/search?show-fields=trailText%2Cthumbnail&page-size=50&q=haiti&api-key=${key}`)
      .then(res => res.json())
      //.then(res => console.log('app.js', res.response.results))
      .then(data => setNewsData(data.response.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Homepage data={newsData} />
        </Route>
        <Route path='/article/:id'>
          <Post data={newsData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
