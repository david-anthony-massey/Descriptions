import React from "react";
import Title from './components/Title.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        currentItem: {},
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

       Price: ${34.01} & FREE Shipping. Details & FREE Returns
        <br/><br/>
       Product Description:
      </div>
    )
  }
}

export default App;