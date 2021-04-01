import React, { ChangeEvent, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import { Search as SearchIcon } from '../Icons';

const Search: React.FC = (): ReactElement => {
  // Input value and UI on-focus state
  const [subreddit, setSubreddit] = useState('');
  const [onFocus, setOnFocus] = useState(false);

  // Update the value only if the input is acceptable
  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (/^\w+$/.test(event.target.value) || event.target.value.length === 0) {
      setSubreddit(event.target.value);
    }
  };

  // Render
  return (
    <div className={onFocus ? style.focused : style.field}>
      <input
        className={style.input}
        placeholder="Search"
        type="text"
        value={subreddit}
        onChange={handleInputOnChange}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        data-testid="search-input"
      />
      <Link
        className={style.submit}
        to={`/${subreddit}`}
        data-testid="submit-button"
      >
        <SearchIcon />
      </Link>
    </div>
  );
};

export default Search as React.FC;
