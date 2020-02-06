// import React from "react";
// import StarRatingComponent from "react-star-rating-component";

// function round(value, decimals) {
//   return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
// }

// class LeafRating extends React.Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//   }

//   render() {
//     let halfStarVal,
//       fullStarVal,
//       emptyStarVal,
//       halfStar,
//       starWidth,
//       starHeight,
//       extraInfo,
//       extraInfoStyle,
//       blockSize;
//       console.log("this is from str2", props.ratings)
//     emptyStarVal = 5 - Math.ceil(this.props.ratings);
//     fullStarVal = Math.floor(this.props.ratings);
//     if (
//       this.props.ratings -
//         Math.floor(this.props.ratings) >=
//       0.5
//     ) {
//       halfStarVal = 1;
//     } else if (
//       this.props.rating -
//         Math.floor(this.props.ratings) !==
//       0
//     ) {
//       halfStarVal = 0;
//       emptyStarVal += 1;
//     } else {
//       halfStarVal = 0;
//     }

//     if (this.props.type === "main") {
//       starHeight = "35";
//       starWidth = "30";
//       extraInfo = `${round(this.props.rating, 1)} out of 5`;
//       extraInfoStyle = {
//         font: "Gill Sans",
//         fontWeight: "bold",
//         fontSize: 18,
//         textAlign: "center",
//         alignSelf: "center",
//         marginLeft: "10px"
//       };
//       blockSize = {
//         width: "260px",
//         height: "45px",
//         display: "flex",
//         textAlign: "center",
//         alignSelf: "center"
//       };
//     } else if (this.props.type === "review") {
//       starHeight = "25";
//       starWidth = "20";
//       extraInfo = this.props.reviewTitle;
//       extraInfoStyle = {
//         font: "Gill Sans",
//         fontWeight: "bold",
//         fontSize: 15,
//         textAlign: "center",
//         alignSelf: "center",
//         marginLeft: "10px"
//       };
//       blockSize = {
//         width: "150px",
//         height: "60px",
//         display: "flex",
//         textAlign: "center",
//         alignSelf: "center"
//       };
//     } else if (this.props.type === "featureReview") {
//       starHeight = "25";
//       starWidth = "20";
//       extraInfo = round(this.props.rating, 1);
//       extraInfoStyle = {
//         font: "Gill Sans",
//         fontSize: 15,
//         textAlign: "center",
//         alignSelf: "center",
//         marginLeft: "10px"
//       };
//       blockSize = {
//         width: "150px",
//         height: "60px",
//         display: "flex",
//         textAlign: "center",
//         alignSelf: "center"
//       };
//     }

//     let fullStars = (
//       <StarRatingComponent
//         name="halfy"
//         editing={false}
//         renderStarIcon={() => (
//           <span>
//             <img
//               src="../images/full_leaf.png"
//               alt="test"
//               width={starWidth}
//               height={starHeight}
//             />
//           </span>
//         )}
//         starCount={fullStarVal}
//       />
//     );

//     let emptyStars = (
//       <StarRatingComponent
//         name="halfy"
//         editing={false}
//         style={{
//           alignSelf: "center",
//           textAlign: "center",
//           verticalAlign: "middle"
//         }}
//         renderStarIcon={() => (
//           <span>
//             <img
//               src="../images/empty_leaf.png"
//               alt="test"
//               width={starWidth}
//               height={starHeight}
//             />
//           </span>
//         )}
//         starCount={emptyStarVal}
//       />
//     );

//     halfStar = (
//       <StarRatingComponent
//         name="halfy"
//         editing={false}
//         renderStarIcon={() => (
//           <span>
//             <img
//               src="../images/half_leaf.png"
//               alt="test"
//               width={starWidth}
//               height={starHeight}
//             />
//           </span>
//         )}
//         starCount={halfStarVal}
//       />
//     );
//     return (
//       <div style={blockSize}>
//         {fullStars}
//         {halfStar}
//         {emptyStars}
//         <div style={extraInfoStyle}>{extraInfo}</div>
//       </div>
//     );
//   }
// }

// export default LeafRating;