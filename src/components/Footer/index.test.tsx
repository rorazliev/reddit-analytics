import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer outer link', () => {
  it('should have the outer link', () => {
    render(<Footer />);
    const link = screen.queryByText('Ruslan Orazliev');
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/rorazliev');
  });
});
