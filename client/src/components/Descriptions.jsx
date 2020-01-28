import React from 'react';

const Description = (props) => {
  return (
    <div>
      This is the description component
      {props.description.map((description, index) => ( 
          <div key={index}>
            {/* {description.productDescription} */}
          </div>
        ))}
    </div>
  )
}


export default Description;