import React from 'react';
import Rating from './StarRating';
import LeafRating from './StarRating2';

const Title = (props) => { 
  
  return (
    <div>
      <div>
      {props.title.map((title, index) => ( 
          <div key={title.id}>
            <h1 id="tittle" className="a-size-large a-spacing-none" >{title.productName}</h1>
          </div>
        ))}
        </div>
      <div className="company-line"><h6>by <a href="#">Company Name</a></h6></div>
      <Rating /> 
      {/* <LeafRating />  */}
    </div>
  )
}

 export default Title;