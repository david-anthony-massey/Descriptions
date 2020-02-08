import React from 'react';

function Rating2({ratings, productId}) {
  //console.log("This is from Rating2: ", ratings[0])
  //ratings = 3
  const rating = [];
  let image = '';
  for (let i = 1; i < 6; i++) {
     if (i <= ratings) {
      image = '../images/full_leaf.png'; 
    } else if (i - ratings <= 0.25) {
      image = '../images/full_leaf.png';
    } else if (i - ratings > 0.25 && i - ratings < 0.75) {
      image = '../images/half_leaf.png';
    } else {
      image = '../images/empty_leaf.png';
    }

    rating.push(
      <img
        key={i}
        src={image}
        alt="Leaf"
        id={productId}
        // onClick={{rating}}
        height="27px"
        width="27px"
      />,
    );
  }

  return (

    <div>

      {rating}
    </div>
  );
}

export default Rating2