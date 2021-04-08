import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import { Analytics, Github } from '../Icons';

const Header: React.FC = (): ReactElement => (
  <nav className={style.navigation} role="navigation">
    <div className={style.container}>
      <Link to="/" className={style.homeLink} data-testid="home-link">
        <Analytics />
      </Link>
      <a
        className={style.githubLink}
        href="https://github.com/rorazliev/reddit-analytics"
        target="_blank"
        rel="noreferrer"
        data-testid="github-link"
      >
        <Github />
      </a>
    </div>
  </nav>
);

export default Header;
