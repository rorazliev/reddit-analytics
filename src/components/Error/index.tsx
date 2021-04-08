import React, { ReactElement } from 'react';
import style from './index.module.scss';

const Error: React.FC = (): ReactElement => (
  <div className={style.container}>
    <h2 className={style.heading}>:(</h2>
    <p className={style.description}>
      You ether did a mistake
      {' '}
      or this subreddit does not exist.
    </p>
  </div>
);

export default Error;
