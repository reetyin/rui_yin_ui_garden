import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component library app', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /Rui Yin UI Component Library/i });
  expect(headerElement).toBeInTheDocument();
});

test('renders production build text', () => {
  render(<App />);
  const textElement = screen.getByText(/Production build of React Component Library/i);
  expect(textElement).toBeInTheDocument();
});
