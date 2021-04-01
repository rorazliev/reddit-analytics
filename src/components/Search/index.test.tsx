import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Search from '.';

describe('Search', () => {
  it('should validate input correctly', () => {
    render(
      <Router>
        <Search />
      </Router>,
    );

    const input = screen.getByTestId('search-input');

    expect(input.value).toEqual('');

    // Correct input
    fireEvent.change(input, { target: { value: 'javascript' } });
    expect(input.value).toEqual('javascript');

    // Incorrect input
    fireEvent.change(input, { target: { value: '   java &+~ script   ' } });
    expect(input.value).toEqual('javascript');
  });

  it('should change the link while input is changed', () => {
    render(
      <Router>
        <Search />
      </Router>,
    );

    const button = screen.getByTestId('submit-button');
    const input = screen.getByTestId('search-input');

    expect(button).toBeEnabled();

    fireEvent.change(input, { target: { value: 'javascript' } });
    expect(button.href.includes('javascript')).toBeTruthy();
  });
});
