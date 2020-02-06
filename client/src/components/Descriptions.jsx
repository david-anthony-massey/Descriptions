import React from 'react';

// maps over descrition prop and returns the product description 
const Description = (props) => {
  return (
    <div>
      {props.description.map((description, index) => ( 
          <div key={description.id}>
            {description.productDescription}
          </div>
        ))} 
    </div>
  )
}


export default Description;