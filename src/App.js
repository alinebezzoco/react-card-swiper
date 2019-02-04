import React, { Component } from 'react';
import './App.css';
import Cards from './Card';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Cards width="320px" title="Aline" description="This is a card" footer="Okay" callToAction="Click here" linkUrl="http://twitter.com/bezzocoaline" />
      </div>
    );
  }
}

export default App;
