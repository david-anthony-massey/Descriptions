import React from 'react';
//import Rating from './StarRating';


const Title = (props) => { 
  // maps over title prop and returns the productName from the db
  // imports Rating component 

  return (
    <div>
      <div>
      {props.title.map((title, index) => ( 
          <div key={title.id}>
            <h1 id="tittle" className="a-size-large a-spacing-none" >{title.productName}</h1>
          </div>
        ))}
        </div>
      <div className="company-line"><h6>by <a href="#Company">Company Name</a></h6></div>
      {/* <Rating />  */}
    
    </div>
  )
}

// needed to export Title to App
 export default Title;