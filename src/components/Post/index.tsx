import React, { ReactElement } from 'react';
import dayjs from 'dayjs';
import style from './index.module.scss';
import { Star } from '../Icons';
import { Post as PostType } from '../../types/post';
import { userURL } from '../../api/reddit';

type PropType = {
  post: PostType,
};

const Post: React.FC<PropType> = ({ post }): ReactElement => (
  <div className={style.card} key={post.id}>
    <div className={style.header}>
      <div className={style.rating}>
        <Star />
        {post.score >= 1000 ? `${(post.score / 1000).toFixed(1)}k` : post.score}
      </div>
      <span className={style.date}>
        {dayjs.unix(post.created_utc).format('h:mma')}
      </span>
    </div>
    <a
      className={style.title}
      href={post.full_link}
      target="_blank"
      rel="noreferrer"
    >
      {post.title}
    </a>
    <span className={style.author}>
      Posted by
      {' '}
      <a
        className={style.authorLink}
        href={`${userURL}/${post.author}`}
        target="_blank"
        rel="noreferrer"
      >
        {post.author}
      </a>
    </span>
  </div>
);

export default Post;
