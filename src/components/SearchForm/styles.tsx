import styled from 'styled-components';

type ContainerPropsType = {
  readonly isFocused: boolean,
  readonly isLight: boolean
}

type ButtonPropsType = {
  readonly isLight: boolean,
}

export const Container = styled.form<ContainerPropsType>`
  background-color: ${(props) => (props.isLight ? '#ffffff' : '#1c1c1e')};
  color: ${(props) => (props.isLight ? '#000000' : '#ffffff')};
  transition: all 0.15s ease-in-out;
  box-sizing: border-box;
  align-items: center;
  flex-direction: row;
  border-radius: 2rem;
  padding: 0 1.5rem;
  max-width: 40rem;
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  margin: 0 0.5rem 0 0.5rem;
  background: transparent;
  color: inherit;
  outline: none;
  height: 100%;
  width: 100%;
  border: 0;
`;

export const Button = styled.button<ButtonPropsType>`
  border: 1px solid ${(props) => (props.isLight ? '#f2f2f7' : '#3a3a3c')};
  background-color: ${(props) => (props.isLight ? '#ffffff' : '#2c2c2e')};
  color: ${(props) => (props.isLight ? '#007aff' : '#0a84ff')};
  transition: all 0.15s ease-in-out;
  box-sizing: border-box;
  display: inline-flex;
  border-radius: 1rem;
  margin: 1.5rem 0;
  padding: 0.65rem;
  cursor: pointer;

  & > svg {
    display: inline-block;
  }
`;
