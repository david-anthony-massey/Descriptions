import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      //rating: 4 // this represents the initial state/number of stars the page will show 
    };
  }
 
  // onStarClick isn't workng. I need to refactor
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state; // This will show the current number of stars?
    
    return (                
      <div>
        <span >
        <StarRatingComponent 
           renderStarIcon={() => 
          <span>
            <img
              src="../images/full_leaf.png" 
              width="30"
              height="35"
              style={{ verticalAlign: "middle" }}
            />
          </span>}
          name="rate" 
          starCount={5}     
          value={rating}
          onStarClick={this.onStarClick.bind(this)} 
        /> <span className="ratings"> </span>
        </span> 
      </div>
    );
  }
}


export default Rating;
