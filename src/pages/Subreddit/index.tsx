import React, { ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import style from './index.module.scss';
import * as api from '../../api/reddit';
import sortPosts from '../../helpers/sortPosts';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import { SortedPosts } from '../../types/post';

const Subreddit: React.FC = (): ReactElement => {
  // Get subreddit name from URL
  const { subreddit } = useParams<{subreddit: string}>();

  //
  const [posts, setPosts] = useState<SortedPosts>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetch data
  useEffect(() => {
    (async () => {
      // Start fetching
      setIsFetching(true);

      // Fetch data
      try {
        const promise = await api.fetchData(subreddit);
        const data = await promise.json();
        const sorted = sortPosts(data.data);

        setPosts(sorted);
      } catch (error) {
        setIsError(true);
      }

      // Stop fetching
      setIsFetching(false);
    })();
  }, [subreddit]);

  // On fetching
  if (isFetching) return <Loader />;

  // On error occured
  if (isError) return <Error />;

  // On subreddit does not exist
  if (!isFetching && !isError && posts.length === 0) return <Error />;

  // Render
  return (
    <>
      <Helmet>
        <title>{subreddit}</title>
      </Helmet>
      <div className={style.container}>
        <h2 className={style.heading}>
          r /
          {' '}
          {subreddit}
        </h2>
      </div>
    </>
  );
};

export default Subreddit as React.FC;
