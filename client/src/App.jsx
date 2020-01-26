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
    //console.log("This is from the get request"); 
    axios.get('/product')
    .then((response) => {
      console.log("just added this: ", response);
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
      </div>
    )
  }
}

export default App;