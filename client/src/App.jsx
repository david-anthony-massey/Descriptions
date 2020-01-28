import React from "react";
import Title from './components/Title.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {},
      title: []
    };
    this.getDescription = this.getDescription.bind(this);
  }

  componentDidMount() {
    this.getDescription()
  }

  getDescription () {
    axios.get('/product')
    .then((response) => {
      console.log("this is from the axios request: ", response);
      this.setState({
        title: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
       <Title title={this.state.title}/>
       <h5>by Test Info</h5>
       <div>* Rating System * 91 ratings | 4 answered questions</div>
       ___________________________________________________________ <br/><br/>
      <div>
      Price: $<span style={{color: "red"}}>{34.01}</span> & FREE Shipping. Details & FREE Returns
      </div>
        <br/><br/>
       Product Description:
      </div>
    )
  }
}

export default App;