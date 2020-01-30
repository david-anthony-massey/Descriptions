import React from 'react';

const Description = (props) => {
  return (
    <div>
      {props.description.map((description, index) => ( 
          <div key={index}>
            {description.productDescription}
          </div>
        ))}
      <hr></hr>  
    </div>
  )
}


export default Description;