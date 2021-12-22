import React, { ReactElement } from 'react';
import dayjs from 'dayjs';
import { useSelector } from '../../redux/store';
import { Post as PostType } from '../../types/types';
import { Star } from '../IconSet';
import {
  Author,
  AuthorLink,
  Card, Date, Header, Raiting, Title,
} from './styles';
import { userURL } from '../../api/api';

type PropsType = {
  data: PostType,
}

const Post: React.FC<PropsType> = ({ data }): ReactElement => {
  // Get a color scheme indicator
  const isLight = useSelector((state) => state.app.colorScheme === 'light');

  // Render
  return (
    <Card isLight={isLight}>
      <Header>
        <Raiting>
          <Star />
          {data.score >= 1000 ? `${(data.score / 1000).toFixed(1)}k` : data.score}
        </Raiting>
        <Date>
          {dayjs.unix(data.created_utc).format('h:mma')}
        </Date>
      </Header>
      <Title
        href={data.full_link}
        target="_blank"
        rel="noreferrer"
      >
        {data.title}

      </Title>
      <Author>
        Posted by
        {' '}
        <AuthorLink
          href={`${userURL}/${data.author}`}
          target="_blank"
          rel="noreferrer"
        >
          {data.author}

        </AuthorLink>
      </Author>
    </Card>
  );
};

export default Post;
