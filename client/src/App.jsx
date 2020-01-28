import React from "react";
import Title from './components/Title.jsx';
import Description from './components/Descriptions.jsx';
import Price from './components/Price.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {},
      title: [],
      description: [],
      price: []
    };
    this.getDescriptionInfo = this.getDescriptionInfo.bind(this);
  }

  componentDidMount() {
    this.getDescriptionInfo()
  }

  // GET request for product info from the db
  getDescriptionInfo () {
    axios.get('/product')
    .then((response) => {
      console.log("this is from the axios request: ", response);
      this.setState({
        title: response.data,
        description: response.data,
        price: response.data
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
          <Price price={this.state.price}/>
        </div>
          <br/><br/>
        <div>
          <Description description={this.state.description}/>
        </div>
      </div>
    )
  }
}

export default App;