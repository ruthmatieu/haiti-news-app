import React from "react";
import NewsContainer from "./NewsContainer";

function Homepage({ data }) {
    //console.log('homepage', data)
  return (
    <div>
        <h1>All News Haiti</h1>
        <NewsContainer
            data={data}
        />
    </div>
  );
}

export default Homepage;
