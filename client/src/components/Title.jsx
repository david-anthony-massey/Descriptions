import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Title = (props) => {
  return (
    <div>
      {props.title.map((title, index) => ( 
          <div key={index}>
            <h1 id="tittle" class="a-size-large a-spacing-none" >{title.productName}</h1>
          </div>
        ))}
      <h6>by Test Info</h6>
      <div>* Rating * 91 ratings | 4 answered questions</div>
    </div>
  )
}

 export default Title;