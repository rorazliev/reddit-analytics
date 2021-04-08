import React, { ReactElement } from 'react';
import style from './index.module.scss';

const Footer: React.FC = (): ReactElement => (
  <footer className={style.footer} role="contentinfo">
    <div className={style.container}>
      <span className={style.copyright}>
        Made with ❤️ by
        {' '}
        <a
          className={style.link}
          href="https://linkedin.com/in/rorazliev"
          target="_blank"
          rel="noreferrer"
        >
          Ruslan Orazliev
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
