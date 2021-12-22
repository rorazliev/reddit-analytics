import React, {
  ChangeEvent, ReactElement, SyntheticEvent, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Input, Button } from './styles';
import { Search } from '../IconSet';
import { useSelector } from '../../redux/store';

const SearchForm: React.FC = (): ReactElement => {
  // Get a reference to the navigate function
  const navigate = useNavigate();

  // Input state and focus effect control
  const [value, setValue] = useState<string>('');
  const [onFocus, setOnFocus] = useState<boolean>(false);

  // Get a color scheme indicator
  const isLight = useSelector((state) => state.app.colorScheme === 'light');

  // Handle input changes
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (/^\w+$/.test(event.target.value) || event.target.value.length === 0) {
      setValue(event.target.value);
    }
  };

  // Handle form submit
  const handleOnSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    if (value.trim().length !== 0) navigate(`${value.trim()}`);
  };

  // Render
  return (
    <Container
      onSubmit={handleOnSubmit}
      isFocused={onFocus}
      isLight={isLight}
    >
      <Input
        placeholder="Search"
        type="text"
        value={value}
        onChange={handleOnChange}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        data-testid="search-input"
      />
      <Button
        type="submit"
        isLight={isLight}
        data-testid="submit-button"
      >
        <Search />
      </Button>
    </Container>
  );
};

export default SearchForm;
