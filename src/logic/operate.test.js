import operate from './operate';

describe('test operate functions', () => {
  test('test the addition opperation', () => {
    // Assign step
    const numberOne = 9;
    const numberTwo = 12;
    const operation = '+';
    // Act
    const result = +operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe(21);
  });
  test('test the subtraction opperation', () => {
    // Assign step
    const numberOne = 9;
    const numberTwo = 12;
    const operation = '-';
    // Act
    const result = +operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe(-3);
  });
  test('test the multiplication opperation', () => {
    // Assign step
    const numberOne = 9;
    const numberTwo = 12;
    const operation = 'x';
    // Act
    const result = +operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe(108);
  });
  test('test the division opperation', () => {
    // Assign step
    const numberOne = 9;
    const numberTwo = 12;
    const operation = '÷';
    // Act
    const result = +operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe(0.75);
  });
  test('test the modulo opperation', () => {
    // Assign step
    const numberOne = 9;
    const numberTwo = 12;
    const operation = '%';
    // Act
    const result = +operate(numberTwo, numberOne, operation);
    // Assert
    expect(result).toBe(3);
  });
  test('test the division by zero opperation', () => {
    // Assign step
    const numberOne = 9;
    const numberTwo = 0;
    const operation = '÷';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe("Can't divide by 0.");
  });
  test('test the modulo after division by zero opperation', () => {
    // Assign step
    const numberOne = 9;
    const numberTwo = 0;
    const operation = '%';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
