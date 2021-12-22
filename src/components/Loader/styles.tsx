import styled, { keyframes } from 'styled-components';

type PropsType = {
  readonly isLight: boolean,
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Spinner = styled.div<PropsType>`
  animation: ${spin} 1s linear infinite;
  border: 5px solid transparent;
  border-top: 5px solid ${(props) => (props.isLight ? '#007aff' : '#0a84ff')};
  box-sizing: border-box;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
