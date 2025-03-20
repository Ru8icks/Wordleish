import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import App from '../App';

describe('App Component', () => {
  test('renders heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Wordleish/i);
    expect(headingElement).toBeInTheDocument();
  });

});