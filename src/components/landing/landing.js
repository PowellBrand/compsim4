import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  }
  subCount = () => {
    this.setState({ count: this.state.count - 1 });
  }


  render() {
    return (
      <div className="main">
{/* 36J */}
        <button className="btn" onClick={this.addCount}>Add 1</button>
        <button className="btn" onClick={this.subCount}>Sub 1</button>
        <p className="countP">Count: {this.state.count}</p>
      </div>
    );
  }
}

export default App;