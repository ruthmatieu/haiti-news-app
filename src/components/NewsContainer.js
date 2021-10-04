import React from "react";

function NewsContainer({ data }) {
    console.log('NewsContainer', data)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {data.map(item=> (
          <div key={item.id} style={{border: '1px solid black'}}>
            <h2>{item.webTitle}</h2>
          </div>
      ))}
    </div>
  );
}

export default NewsContainer;