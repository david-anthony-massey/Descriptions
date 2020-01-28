import React from 'react';

const Title = (props) => {
  // console.log('This is from the tittle; ', props)
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