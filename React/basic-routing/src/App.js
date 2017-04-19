import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
