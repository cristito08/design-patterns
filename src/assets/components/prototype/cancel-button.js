import Button from './button.js'


class CancelButton extends Button{
    constructor(props){
      super(props);
      this.className = this.className + ' cancel-button ';
    }
  }

export default CancelButton;