/* eslint-disable */
import React from 'react';
import './Calculator.css';

class Button extends React.Component {
 constructor(props) {
    super(props);
 }
render () {
    return (
        <button className={this.props.class} >{this.props.name}</button>
    );
}
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    const symbols = ['AC','+/-','%','÷','7','8','9','x','4','5','6','-','1','2','3','+','0','.','='];
    let buttons = [];
    for(let i=0; i<symbols.length; i += 1) {
        if ( (i+1)%4 === 0 || (i+1) === symbols.length) {
            buttons.push(<Button name={symbols[i]} class={'orange'} />);
        }
        else {
            buttons.push(<Button name={symbols[i]} class={'gray'} />);
        }
    }
    return (
      <div className="calculator">
        <p>0</p>
        {buttons}
      </div>
    );
  }
}
export default Calculator;
