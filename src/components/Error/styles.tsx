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

export const Heading = styled.p<PropsType>`
  color: ${(props) => (props.isLight ? '#007aff' : '#0a84ff')};
  text-align: center;
  max-width: 60rem;
  font-size: 4rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  margin: 2rem 0 4rem;
  text-align: center;
  font-size: 1.6rem;
  max-width: 60rem; 
`;
