import React, { Component } from 'react';
import './button.css';

class Button extends Component{
    constructor(props){
      super(props);
      this.className='button';
    }
     render(){
       return <span className={this.className}>
          {this.props.children} 
        </span>
     }
  }

export default Button;
  

