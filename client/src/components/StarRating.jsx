import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      rating: 0 // this represents the initial state/number of stars the page will show 
    };
  }

  
 
  // onStarClick isn't workng. I need to refactor
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state.rating; // This will show the current number of stars?
    let full = "http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/images/full_leaf.png"
    // let half = "http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/images/half_leaf.png"
    // let empty = "http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/images/empty_leaf.png"

    return ( 
      <div>
        <span >
        <StarRatingComponent 
          renderStarIcon={() => 
            <span>
              <img
                src={full} 
                width="30"
                height="35"
                style={{ verticalAlign: "middle" }}
              />
              
            </span>}
          name="rate" 
          starCount={5}     
          value={rating}
          onStarClick={this.onStarClick.bind(this)} 
          editing={true} 
        /> <span className="ratings"> </span>
        
        </span> 
      </div>
    );
  }
}


export default Rating;
