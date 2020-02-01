import React from 'react';
import Rating from './StarRating';

const Title = (props) => {
  return (
    <div>
      {props.title.map((title, index) => ( 
          <div key={index}>
            <h1 id="tittle" class="a-size-large a-spacing-none" >{title.productName}</h1>
          </div>
        ))}
      <h6>by Test Info</h6>
    <Rating /> 
    </div>
  )
}

 export default Title;