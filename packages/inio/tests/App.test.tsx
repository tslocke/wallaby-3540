import { render, screen } from '@solidjs/testing-library';
import { describe, it, expect } from 'vitest';
import App from '../src/App';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders default greeting', () => {
    render(() => <App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello Solid');
    expect(screen.getByTestId('tagline')).toHaveTextContent('reactive UI');
  });

  it('renders with provided name', () => {
    render(() => <App name="World" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello World');
  });
});
