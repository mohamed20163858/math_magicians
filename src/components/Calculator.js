/* eslint-disable */
import React from 'react';
// import calculate from '../logic/calculate';
import './Calculator.css';

class Button extends React.Component {
 constructor(props) {
    super(props);
     this.processRecievedInput = this.processRecievedInput.bind(this);
 }
 processRecievedInput (e) {
    this.props.recievedInput(e.target.textContent);
 }
render () {
    return (
        <button className={this.props.class} onClick={this.processRecievedInput}>{this.props.name}</button>
    );
}
}

class Paragraph extends React.Component {
constructor(props) {
    super(props);
}
render () {
    return (
        <p>{this.props.value}</p>
        );
}
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {recievedChar: ''};
    this.passInput = this.passInput.bind(this);
  }
  passInput(newChar) {
    this.setState({recievedChar: newChar});
    // console.log(newChar);
 }
  render() {
    
    const symbols = ['AC','+/-','%','÷','7','8','9','x','4','5','6','-','1','2','3','+','0','.','='];
    let buttons = [];
    for(let i=0; i<symbols.length; i += 1) {
        if ( (i+1)%4 === 0 || (i+1) === symbols.length) {
            buttons.push(<Button name={symbols[i]} recievedInput={this.passInput} class={'orange'} />);
        }
        else {
            buttons.push(<Button name={symbols[i]} recievedInput={this.passInput} class={'gray'} />);
        }
    }
    return (
      <div className="calculator">
        <Paragraph value={this.state.recievedChar}/>
        {buttons}
      </div>
    );
  }
}
export default Calculator;
