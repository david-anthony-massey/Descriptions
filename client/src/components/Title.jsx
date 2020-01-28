import React from 'react';

const Title = (props) => {
  return (
    <div>
    Product Name
      {props.title.map((title, index) => ( 
          <div key={index}>
            {/* {title.productName} */}
          </div>
        ))}
    </div>
  )
}
 export default Title;