import React from 'react';

const Title = (props) => {
  return (
    <div>
      {props.title.map((title, index) => ( 
          <div key={index}>
            {title.productName}
          </div>
        ))}
      <h6>by Test Info</h6>
      <div>* Rating System * 91 ratings | 4 answered questions</div>
    </div>
  )
}

 export default Title;