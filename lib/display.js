class Button {
  constructor(color){
    this.color = color;
    this.pressed = false;
    this.buttonClass = this.buttonClass.bind(this);
  }

  buttonClass(){
    const pushed = this.pressed ? `${this.color}-pressed button` : `${this.color}-unpressed button `
    return pushed;
  }
  unpressButton(){
    let button = document.getElementById(`${this.color}-button`);
    this.pressed = false;
    button.className = this.buttonClass();
  }

  pressButton(){
    let button = document.getElementById(`${this.color}-button`)
    this.pressed = true;
    button.className = this.buttonClass();

  }
}


export default Button;
