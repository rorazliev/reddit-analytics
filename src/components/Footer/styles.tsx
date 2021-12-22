import styled from 'styled-components';

type PropsType = {
  readonly isLight: boolean,
}

export const Container = styled.footer`
  transition: background 0.15s ease-in-out;
  box-sizing: border-box;
  width: 100%;
`;

export const Box = styled.div`
  justify-content: center;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  position: relative;
  min-height: 6.4rem;
  max-width: 120rem;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

export const Copyright = styled.span`

`;

export const Link = styled.a<PropsType>`
  color: ${(props) => (
    props.isLight ? 'rgb(0, 122, 255)' : 'rgb(10, 132, 255)'
  )};
  transition: opacity 0.15s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;
