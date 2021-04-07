import React from 'react';
import { render, screen } from '@testing-library/react';
import postData from '../../mocks/one-post.mock.json';
import Post from '.';
import { userURL } from '../../api/reddit';

describe('Post', () => {
  it('should render a post', () => {
    const { container } = render(<Post post={postData} />);
    expect(container).toBeInTheDocument();
  });

  it('should check a post link', () => {
    render(<Post post={postData} />);
    const link = screen.queryByText(postData.title);
    expect(link).toHaveAttribute('href', postData.full_link);
  });

  it('should check an author link', () => {
    render(<Post post={postData} />);
    const link = screen.queryByText(postData.author);
    expect(link).toHaveAttribute('href', `${userURL}${postData.author}`);
  });
});
