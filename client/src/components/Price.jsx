import React from 'react';

const Price = (props) => {
  return (
    <div>
      This is the price component <br/>
     
      {/* {props.price.map((price, index) => ( 
          <div key={index}>
            {price.price}
          </div>
        ))} */}
    </div>
  )
}

// Price: $<span style={{color: "red"}}>{34.01}</span> & {<strong>Free Shipping</strong>}. Details & FREE Returns

export default Price;