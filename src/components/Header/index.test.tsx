import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '.';

describe('Header', () => {
  it('should check whether the header has a home link', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    const homeLink = screen.getByTestId('home-link');
    expect(homeLink).toHaveAttribute('href', '#/');
  });

  it('should check whether the header has a github link', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    const githubLink = screen.getByTestId('github-link');
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/rorazliev/reddit-analytics',
    );
  });
});
