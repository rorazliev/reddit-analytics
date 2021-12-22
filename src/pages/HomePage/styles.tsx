import styled from 'styled-components';

type PropsType = {
  readonly isLight: boolean,
}

export const Container = styled.div`
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  position: relative;
  display: flex;
  padding: 2rem;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  max-width: 60rem;
  font-size: 4rem;
  margin: 0;
`;

export const Highlight = styled.span<PropsType>`
  color: ${(props) => (props.isLight ? '#007aff' : '#0a84ff')}
`;

export const Description = styled.p`
  margin: 2rem 0 4rem;
  text-align: center;
  font-size: 1.6rem;
  max-width: 60rem;
`;
