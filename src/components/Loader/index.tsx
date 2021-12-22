import React, { ReactElement } from 'react';
import { useSelector } from '../../redux/store';
import { Container, Spinner } from './styles';

const Loader: React.FC = (): ReactElement => {
  // Get a color scheme indicator
  const isLight = useSelector((state) => state.app.colorScheme === 'light');

  // Render
  return (
    <Container>
      <Spinner isLight={isLight} />
    </Container>
  );
};

export default Loader;
