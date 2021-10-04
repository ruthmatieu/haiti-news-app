import React from "react";
import NewsContainer from "./NewsContainer";
import Navigation from "./Navigation";

function Homepage({ data }) {
    //console.log('homepage', data)
  return (
    <div>
        <Navigation/>
        <NewsContainer
            data={data}
        />
    </div>
  );
}

export default Homepage;
