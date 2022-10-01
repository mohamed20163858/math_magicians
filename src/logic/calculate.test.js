import calculate from './calculate';

describe('test calculate functions', () => {
  test('test pressing AC button', () => {
    // Assign step
    const obj = {
      total: '9',
      next: '12',
      operation: '+',
    };
    const buttonName = 'AC';
    // Act
    const result = calculate(obj, buttonName);
    // Assert
    expect(result.total).toBeNull();
    expect(result.next).toBeNull();
    expect(result.operation).toBeNull();
  });
  test('test pressing . button', () => {
    // Assign step
    const obj = {
      total: '9',
      next: '12',
      operation: '+',
    };
    const buttonName = '.';
    // Act
    const result = calculate(obj, buttonName);
    // Assert
    expect(result.total).toBe('9');
    expect(result.next).toBe('12.');
    expect(result.operation).toBe('+');
  });
  test('test pressing = button', () => {
    // Assign step
    const obj = {
      total: '9',
      next: '12',
      operation: '+',
    };
    const buttonName = '=';
    // Act
    const result = calculate(obj, buttonName);
    // Assert
    expect(result.total).toBe('21');
    expect(result.next).toBeNull();
    expect(result.operation).toBeNull();
  });
});
