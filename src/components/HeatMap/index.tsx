/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactElement, useState } from 'react';
import { useSelector } from '../../redux/store';
import { hash, unhashHour, unhashWeekday } from '../../utils/converters';
import PostList from '../PostList';
import {
  Cell,
  Container,
  Hint,
  Label,
  Row,
  Table,
  Time,
} from './styles';

const weekdays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

const HeatMap: React.FC = (): ReactElement => {
  // Get posts
  const posts = useSelector((state) => state.data.posts);

  // Get a color scheme indicator
  const isLight = useSelector((state) => state.app.colorScheme === 'light');

  // The index of a clicked cell
  const [index, setIndex] = useState<number>(-1);

  // Get the list of posts to render
  const highlighted = index > 0
    ? posts[unhashWeekday(index)][unhashHour(index)] : [];

  // Render
  return (
    <>
      <Container isLight={isLight}>
        <Table>
          <Row>
            <Label />
            {/* Render timestemps */
            [...Array(24)].map((_, id) => (
              <Time key={id}>
                {id < 10 ? `0${id}` : id}
                :00
              </Time>
            ))
          }
          </Row>
          {/* Render heat map */
          weekdays.map((name, weekday) => (
            <Row key={weekday}>
              <Label>{name}</Label>
              {posts[weekday].map((data, hour) => (
                <Cell
                  key={weekday + hour}
                  isLight={isLight}
                  opacity={data.length}
                  type="button"
                  onClick={() => setIndex(hash(weekday, hour))}
                />
              ))}
            </Row>
          ))
        }
        </Table>
      </Container>
      {index < 0 ? (
        <Hint>
          Click on any cell to see the most remarkable posts, if any
        </Hint>
      ) : <PostList posts={highlighted} />}
    </>
  );
};

export default HeatMap;
