import React, { Component } from 'react';
import Box from './Box'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="columns">
          <div className="column">
            <Box></Box>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
