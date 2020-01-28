import React from 'react';

const Title = (props) => {
  return (
    <div>
    This is the Title component
      {props.title.map((title, index) => ( 
          <div key={index}>
            {/* {title.productName} */}
          </div>
        ))}
    </div>
  )
}

 export default Title;