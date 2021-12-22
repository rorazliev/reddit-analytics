import React, { ReactElement } from 'react';
import { Post as PostType } from '../../types/types';
import Post from '../Post';
import { Container, Heading, Subheading } from './styles';

type PropsType = {
  posts: PostType[],
}

const PostList: React.FC<PropsType> = ({ posts = [] }): ReactElement => {
  //
  if (posts.length === 0) {
    return (
      <Container>
        <Heading>No Post Found</Heading>
        <Subheading>
          We cound not find anything that is worthy of being noticed.
          {' '}
          Try another date and time.
        </Subheading>
      </Container>
    );
  }

  // Render
  return (
    <Container>
      <Heading>The Best of</Heading>
      <Subheading>
        We have found some remarkable posts that are worthy of being noticed.
      </Subheading>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </Container>
  );
};

export default PostList;
