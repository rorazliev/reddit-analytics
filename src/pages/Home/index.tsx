import React, { ReactElement } from 'react';
import style from './index.module.scss';
import Search from '../../components/Search';

const Home: React.FC = (): ReactElement => (
  <div className={style.container}>
    <h2 className={style.heading}>
      Find
      {' '}
      <span className={style.highlight}>the best time to post</span>
      {' '}
      on your subreddit
    </h2>
    <p className={style.description}>
      We analyze top posts from your subreddit,
      {' '}
      and present visualized data grouped by weekday and hours.
      {' '}
      Find the right time and boost your post!
    </p>
    <Search />
  </div>
);

export default Home as React.FC;
