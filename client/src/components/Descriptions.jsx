import React from 'react';

// maps over descrition prop and returns the product description 
const Description = (props) => {
  let text = props.description[0]
  // console.log(text)circle back later?
  return ( 
    <div>
      {props.description.map((description, index) => ( 
          <div key={description.id}>
            <li>{description.productDescription}</li> 
          </div>
        ))}  
    </div>
  )
}


export default Description;