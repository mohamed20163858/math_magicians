import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('simulate navigating  through Quote link ', () => {
  // ARRANGE
  render(<App />);

  // ACT
  userEvent.click(screen.getByText('Quote'));
  // Arrange
  const result = screen.getByTestId('momo-id');
  // ASSERT
  expect(result).toBeInTheDocument();
});
