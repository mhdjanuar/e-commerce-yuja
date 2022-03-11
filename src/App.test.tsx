import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './modules/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//coba test merge branch to master
//Januar - Test merger branch
//Branch master test