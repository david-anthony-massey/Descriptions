import React from "react";

function Rating2({ ratings, productId }) {
  //console.log("This is from Rating2: ", ratings[0])
  //ratings = 3
  const rating = [];
  let image = "";
  for (let i = 1; i < 6; i++) {
    if (i <= ratings) {
      image =
        "https://saskatchewanazon-descriptions.herokuapp.com/images/full_leaf.png";
    } else if (i - ratings <= 0.25) {
      image =
        "https://saskatchewanazon-descriptions.herokuapp.com/images/full_leaf.png";
    } else if (i - ratings > 0.25 && i - ratings < 0.75) {
      image =
        "https://saskatchewanazon-descriptions.herokuapp.com/images/half_leaf.png";
    } else {
      image =
        "https://saskatchewanazon-descriptions.herokuapp.com/images/empty_leaf.png";
    }

    rating.push(
      <img
        key={i}
        src={image}
        alt="Leaf"
        id={productId}
        height="27px"
        width="27px"
      />
    );
  }

  return <div>{rating}</div>;
}

export default Rating2;
