import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

const Button = (props) => {
  const { name, myClass, recievedInput } = props;
  const processRecievedInput = (e) => {
    recievedInput(e.target.textContent);
  };

  return (
    <button type="submit" className={myClass} onClick={processRecievedInput}>{name}</button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  myClass: PropTypes.string.isRequired,
  recievedInput: PropTypes.string.isRequired,
};
const Paragraph = (props) => {
  let result = '';
  const { total, operation, next } = props;
  if (total) {
    result += `${total} `;
  }

  if (operation) {
    result += `${operation} `;
  }
  if (next) {
    result += `${next} `;
  }
  return (
    <p>{result}</p>
  );
};
Paragraph.propTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};
const Calculator = () => {
  const initialS = {
    total: null,
    next: null,
    operation: null,
  };
  const [s, setS] = useState(initialS);
  const passInput = (buttonName) => {
    setS(calculate(s, buttonName));
  };

  const symbols = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const buttons = [];
  for (let i = 0; i < symbols.length; i += 1) {
    if ((i + 1) % 4 === 0 || (i + 1) === symbols.length) {
      buttons.push(<Button name={symbols[i]} recievedInput={passInput} myClass="orange" />);
    } else {
      buttons.push(<Button name={symbols[i]} recievedInput={passInput} myClass="gray" />);
    }
  }
  return (
    <div id="body">
      <h3>Let&apos;s do some math!</h3>
      <div className="calculator">
        <Paragraph operation={s.operation} next={s.next} total={s.total} />
        {buttons}
      </div>
    </div>
  );
};
export default Calculator;
