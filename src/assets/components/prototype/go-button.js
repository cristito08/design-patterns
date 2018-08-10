import Button from './button.js'

class GoButton extends Button{
    constructor(props){
      super(props);
      this.className = this.className + ' go-button';
    }
  }

export default GoButton;