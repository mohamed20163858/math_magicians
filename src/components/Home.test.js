import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

it('renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('existing of heading in page ', () => {
  // ARRANGE
  render(<Home />);

  // ACT
  const result = screen.getByRole('heading');
  // ASSERT
  expect(result).toBeInTheDocument();
});
