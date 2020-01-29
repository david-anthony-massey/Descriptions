import React from 'react';

const Price = (props) => {
  return (
    <div>
      This is the price component <br/>
     
      {props.price.map((price, index) => ( 
          <div key={index}>
            Price: $<span style={{color: "red"}}>{price.price}</span> & {<strong>Free Shipping</strong>}. Details & FREE Returns
          </div>
        ))}
    </div>
  )
}



export default Price;