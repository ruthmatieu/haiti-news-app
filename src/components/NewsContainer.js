import React from "react";

function NewsContainer({ data }) {
    console.log('NewsContainer', data)
  return (
    <div style={{display: 'flex', justifyContent: 'center',flexWrap: 'wrap'}}>
      {data.map(item=> (
          <div key={item.id} style={{border: '1px solid black', maxWidth: '90%'}}>
            <img src={item.fields.thumbnail} alt="" style={{width: '100%'}}/>
            <div>
                <h4>{item.webTitle}</h4>
                <p>{item.fields.trailText}</p>
                <div>
                    <p>{item.webPublicationDate}</p>
                </div>
            </div>
          </div>
      ))}
    </div>
  );
}

export default NewsContainer;