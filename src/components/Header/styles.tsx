import { Link } from 'react-router-dom';
import styled from 'styled-components';

type PropsType = {
  readonly isLight: boolean,
}

export const Container = styled.header<PropsType>`
  background-color: ${(props) => (
    props.isLight ? 'rgba(242, 242, 247, 0.9)' : 'rgba(28, 28, 30, 0.9)'
  )};
  transition: background 0.15s ease-in-out;
  box-sizing: border-box;
  position: sticky;
  z-index: 999;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
`;

export const Box = styled.div`
  justify-content: space-between;
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

export const RightActions = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
`;

export const ColorSchemeToggle = styled.button<PropsType>`
  color: ${(props) => (
    props.isLight ? 'rgb(0, 122, 255)' : 'rgb(255, 214, 10)'
  )};
  border: 1px solid ${(props) => (
    props.isLight ? 'rgb(209, 209, 214)' : 'rgb(58, 58, 60)'
  )};
  transition: all 0.15s ease-in-out;
  background-color: transparent;
  box-sizing: border-box;
  display: inline-flex;
  border-radius: 1rem;
  margin-left: 2rem;
  padding: 0.65rem;
  cursor: pointer;

  & > svg {
    display: inline-block;
  }
`;

export const HomeLink = styled(Link)<PropsType>`
  color: ${(props) => (
    props.isLight ? 'rgb(0, 122, 255)' : 'rgb(10, 132, 255)'
  )};
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
  display: flex;
  border: none;

  & > svg {
    display: inline-block;
  }
`;

export const GithubLink = styled.a<PropsType>`
  color: ${(props) => (
    props.isLight ? 'rgb(0, 122, 255)' : 'rgb(10, 132, 255)'
  )};
  border: 1px solid ${(props) => (
    props.isLight ? 'rgb(209, 209, 214)' : 'rgb(58, 58, 60)'
  )};
  transition: all 0.15s ease-in-out;
  background-color: transparent;
  box-sizing: border-box;
  display: inline-flex;
  border-radius: 1rem;
  margin-left: 2rem;
  padding: 0.65rem;
  cursor: pointer;

  & > svg {
    display: inline-block;
}
`;
