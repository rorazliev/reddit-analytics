/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactElement, useState } from 'react';
import style from './index.module.scss';
import { unhashHour, unhashWeekday, hash } from '../../helpers/converters';
import { SortedPosts } from '../../types/post';
import PostList from '../PostList';

type PropType = {
  posts: SortedPosts
}

// Used to display a column of weekdays
const weekdays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

// Used to style heat map cells
const cellColors = [
  style.lighter,
  style.light,
  style.medium,
  style.dark,
  style.darker,
];

const HeatMap: React.FC<PropType> = ({ posts }): ReactElement => {
  // Index used to identify a focused heat map cell
  const [index, setIndex] = useState(-1);

  // Highlighted posts for weekday / hour
  const highlighted = index > 0
    ? posts[unhashWeekday(index)][unhashHour(index)]
    : [];

  return (
    <>
      <div className={style.container}>
        <div className={style.table}>
          {/* The hour row */}
          <div className={style.row}>
            <div className={style.label} />
            {
            [...Array(24)].map((_, id) => (
              <div className={style.time}>
                {id < 10 ? `0${id}` : id}
                :00
              </div>
            ))
          }
          </div>
          {/* Heat map */}
          {
          weekdays.map((name, weekday) => (
            <div key={weekday} className={style.row}>
              <div className={style.label}>{name}</div>
              {
                posts[weekday].map((data, hour) => (
                  <button
                    key={weekday + hour}
                    className={cellColors[data.length]}
                    type="button"
                    onClick={() => setIndex(hash(weekday, hour))}
                  />
                ))
              }
            </div>
          ))
        }
        </div>
        <div className={style.colors}>
          <span>Less</span>
          <div className={style.palette}>
            {
            cellColors.map((color, id) => <div key={id} className={color} />)
            }
          </div>
          <span>More</span>
        </div>
      </div>
      <p className={style.hint}>
        Click on any cell to see the most remarkable posts, if any
      </p>
      {
        index > 0 ? <PostList posts={highlighted} /> : null
      }
    </>
  );
};

export default HeatMap;
