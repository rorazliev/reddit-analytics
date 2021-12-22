import styled from 'styled-components';

type ContainerPropsType = {
  readonly isLight: boolean,
}

type CellPropsType = {
  readonly isLight: boolean,
  readonly opacity: number,
}

export const Container = styled.div<ContainerPropsType>`
  background-color: ${(props) => (props.isLight ? '#ffffff' : '#1c1c1e')};
  transition: background 0.15s ease-in-out;
  border-radius: 1rem;
  padding: 2rem;
`;

export const Table = styled.div`
  white-space: nowrap;
  overflow: auto;
`;

export const Row = styled.div`
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  display: flex;
`;

export const Label = styled.div`
  font-family: monospace;
  font-size: 1.4rem;
  min-width: 5rem;
  flex: 1;
`;

export const Time = styled.div`
  transform: rotate(-90deg);
  margin:  3.5rem 0.5rem 0;
  box-sizing: border-box;
  font-family: monospace;
  white-space: nowrap;
  padding: 0 1.5rem;
  width: 3rem;
`;

export const Cell = styled.button<CellPropsType>`
  background-color: ${(props) => (props.isLight ? '#007aff' : '#0a84ff')};
  opacity: ${(props) => (props.opacity * 0.25 + 0.1 > 1 ? 1 : props.opacity * 0.25 + 0.1)};
  transition: all 0.15s ease-in-out;
  box-sizing: border-box;
  border-radius: 1rem;
  cursor: pointer;
  padding: 1.5rem;
  margin: 0.5rem;
  height: 3rem;
  width: 3rem;
  border: 0;

  &:hover {
    transform: scale(1.2)
  }
`;

export const Hint = styled.p`
  box-sizing: border-box;
  max-width: 76.8rem;
  padding: 1rem 0 0;
  font-size: 1.4rem;
  margin: 1rem auto;
  display: block;

  @media (max-width: 768px) {
    max-width: 30rem;
  }
`;
