import React, { ReactElement } from 'react';
import { useSelector } from '../../redux/store';
import {
  Container, Box, Copyright, Link,
} from './styles';

const Footer: React.FC = (): ReactElement => {
  // Get a color scheme indicator
  const isLight = useSelector((state) => state.app.colorScheme === 'light');

  // Get the current year
  const date = new Date();
  const year = date.getFullYear();

  // Render
  return (
    <Container>
      <Box>
        <Copyright>
          {year}
          {' '}
          © Made with ❤️ by
          {' '}
          <Link
            href="https://linkedin.com/in/rorazliev"
            target="_blank"
            rel="noreferrer"
            isLight={isLight}
          >
            Ruslan Orazliev
          </Link>
        </Copyright>
      </Box>
    </Container>
  );
};

export default Footer;
