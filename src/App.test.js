// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainRoute title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainRoute/i);
    expect(titleElement).toBeInTheDocument();
});
