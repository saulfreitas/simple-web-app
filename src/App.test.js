import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the to-do list heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Simple To-Do List/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders the input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new item/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders the add button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add/i);
  expect(buttonElement).toBeInTheDocument();
});