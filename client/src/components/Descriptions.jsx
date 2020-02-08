import React from 'react';

// maps over descrition prop and returns the product description 
const Description = (props) => {
  return ( 
    <div>
      <div className="valentines">
        <b>
        <font color="#008500">Arrives before Valentine's Day.</font>
        </b> Choose delivery options in checkout.
      </div>
      {props.description.map((description, index) => ( 
          <div key={description.id}>
            <li>{description.productDescription}</li>
            <li>{description.productDescription}</li>
            <li>{description.productDescription}</li>
            <li>{description.productDescription}</li>
            <li>{description.productDescription}</li>
          </div>
        ))} 
       <div className="compare">
          <a href="#Compare">Compare with suimilar items</a>
       </div> 
    </div>
  )
}


export default Description;