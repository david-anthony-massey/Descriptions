import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      rating: props.rating // this represents the initial state/number of stars the page will show 
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state; // This will show the current number of stars
    
    return (                
      <div>
        <span class="a-icon a-icon-star">
        <StarRatingComponent 
          name="rate" 
          starCount={5}     
          value={rating}
          onStarClick={this.onStarClick.bind(this)} 
        /> <span class="ratings">91 ratings | 4 answered questions</span>
        </span> 
      </div>
    );
  }
}

export default Rating;
