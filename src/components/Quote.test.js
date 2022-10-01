import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from './Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('existing of quote in page ', () => {
  // ARRANGE
  render(<Quote />);

  // ACT
  const result = screen.getByTestId('momo-id');
  // ASSERT
  expect(result).toBeInTheDocument();
});
