import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './assets/components/prototype/button.js'
import GoButton from './assets/components/prototype/go-button.js'
import CancelButton from './assets/components/prototype/cancel-button.js'
import './App.css';

class App extends Component {



  render() {
    return (
      <div>
        <Button> Click Me </Button>
        <hr/>
        <GoButton> Go! </GoButton>
        <hr/>
        <CancelButton> Cancel </CancelButton>  
      </div>
    );
  }
}

export default App;
