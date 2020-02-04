import React from 'react';
import Rating from './StarRating';

const Title = (props) => {
  return (
    <div>
      <div>
      {props.title.map((title, index) => ( 
          <div key={title.id}>
            <h1 id="tittle" class="a-size-large a-spacing-none" >{title.productName}</h1>
          </div>
        ))}
        </div>
      <div className="company-line"><h6>by <a href="#">Company Name test 2</a></h6></div>
    <Rating /> 
    </div>
  )
}

 export default Title;