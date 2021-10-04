import React, { useState, useEffect } from "react";

import Homepage from "./components/Homepage";

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
      <Homepage data={newsData}/>
    </div>
  );
}

export default App;
