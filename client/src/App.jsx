import React from "react";
import Title from './components/Title.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }
  render() {
    return (
      <div>
       <h1>This is from React!!!!</h1>
       <Title />
      </div>
    )
  }
}

export default App;