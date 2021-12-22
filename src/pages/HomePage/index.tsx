import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import SearchForm from '../../components/SearchForm';
import { useSelector } from '../../redux/store';
import {
  Container, Description, Highlight, Title,
} from './styles';

const HomePage: React.FC = (): ReactElement => {
  // Get a color scheme indicator
  const isLight = useSelector((state) => state.app.colorScheme === 'light');

  // Render
  return (
    <>
      <Helmet>
        <title>React Analytics</title>
      </Helmet>
      <Container>
        <Title>
          Find
          {' '}
          <Highlight isLight={isLight}>the best time to post</Highlight>
          {' '}
          on your subreddit
        </Title>
        <Description>
          We analyze top posts from a given subreddit,
          {' '}
          and present visualized data grouped by weekday and hours.
          {' '}
          Find the right time and boost your post!
        </Description>
        <SearchForm />
      </Container>
    </>
  );
};

export default HomePage;
