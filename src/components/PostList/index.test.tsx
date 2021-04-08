import React from 'react';
import { render, screen } from '@testing-library/react';
import postsData from '../../mocks/post-list.mock.json';
import PostList from '.';

describe('PostList', () => {
  it('should render the list of posts', () => {
    render(<PostList posts={postsData} />);

    postsData.forEach((post) => {
      const link = screen.queryByText(post.title);
      expect(link).toHaveAttribute('href', post.full_link);
    });
  });
});
