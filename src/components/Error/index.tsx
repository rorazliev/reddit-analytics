import React, { ReactElement } from 'react';
import { useSelector } from '../../redux/store';
import { Container, Description, Heading } from './styles';

const Error: React.FC = (): ReactElement => {
  // Get a color scheme indicator
  const isLight = useSelector((state) => state.app.colorScheme === 'light');

  // Render
  return (
    <Container>
      <Heading isLight={isLight}>:(</Heading>
      <Description>
        You ether did a mistake
        {' '}
        or this subreddit does not exist.
      </Description>
    </Container>
  );
};

export default Error;
