import React, { ReactElement } from 'react';
import style from './index.module.scss';
import Post from '../Post';
import { Post as PostType } from '../../types/post';

type PropType = {
  posts: PostType[]
}

const PostList: React.FC<PropType> = ({ posts = [] }): ReactElement => {
  // if no post found, render the message
  if (posts.length === 0) {
    return (
      <div className={style.container}>
        <h3 className={style.heading}>No Post Found</h3>
        <p className={style.subheading}>
          We cound not find anything that is worthy of being noticed.
          {' '}
          Try another date and time.
        </p>
      </div>
    );
  }

  // Render
  return (
    <div className={style.container}>
      <h3 className={style.heading}>The Best of</h3>
      <p className={style.subheading}>
        We have found some remarkable posts that are worthy of being noticed.
      </p>
      {
        posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </div>
  );
};

export default PostList;
