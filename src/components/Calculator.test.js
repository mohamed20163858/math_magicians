import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('simulate adding two numbers', () => {
  // ARRANGE
  render(<Calculator />);

  // ACT
  userEvent.click(screen.getByText('9'));
  userEvent.click(screen.getByText('+'));
  userEvent.click(screen.getByText('5'));
  userEvent.click(screen.getByText('='));
  const result = screen.getByText('14');

  // ASSERT
  expect(result).toBeInTheDocument();
});
