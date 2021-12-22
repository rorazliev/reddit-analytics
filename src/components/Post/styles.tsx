import styled from 'styled-components';

type PropsType = {
  readonly isLight: boolean,
}

export const Card = styled.div<PropsType>`
  background-color: ${(props) => (props.isLight ? '#ffffff' : '#1c1c1e')};
  flex-direction: column;
  border-radius: 1rem;
  display: flex;
  padding: 2rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Header = styled.div`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  display: flex;
  width: 100%;
`;

export const Raiting = styled.div`
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;

  & > svg {
    margin-right: 1rem;
  }
`;

export const Date = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Title = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  line-height: 1.5;
  font-size: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Author = styled.span`
  font-size: 1.4rem;
  margin-top: 2rem;
`;

export const AuthorLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
