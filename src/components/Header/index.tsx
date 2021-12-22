import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { setColorScheme } from '../../redux/appReducer';
import { Dispatch, useSelector } from '../../redux/store';
import {
  Analytics, Github, Moon, Sun,
} from '../IconSet';
import {
  Box, ColorSchemeToggle, Container, GithubLink, HomeLink, RightActions,
} from './styles';

const Header: React.FC = (): ReactElement => {
  // Get a color scheme indicator
  const isLight = useSelector((state) => state.app.colorScheme === 'light');

  // Get a reference to the dispatch function
  const dispatch: Dispatch = useDispatch();

  // Change a color scheme on click
  const handleOnClick = (): void => {
    dispatch(setColorScheme(isLight ? 'dark' : 'light'));
  };

  // Render
  return (
    <Container isLight={isLight} role="banner">
      <Box>
        <HomeLink isLight={isLight} to="/">
          <Analytics />
        </HomeLink>
        <RightActions>
          <GithubLink
            href="https://github.com/rorazliev/reddit-analytics"
            target="_blank"
            rel="noreferrer"
            isLight={isLight}
          >
            <Github />
          </GithubLink>
          <ColorSchemeToggle isLight={isLight} onClick={handleOnClick}>
            {isLight ? <Moon /> : <Sun />}
          </ColorSchemeToggle>
        </RightActions>
      </Box>
    </Container>
  );
};

export default Header;
