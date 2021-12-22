import { createGlobalStyle } from 'styled-components';

type PropsType = {
  readonly isLight: boolean,
}

export const GlobalStyle = createGlobalStyle<PropsType>`
  html, body {
    padding: 0;
    margin: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
    background-color: ${(props) => (props.isLight ? '#f2f2f7' : '#000000')};
    color: ${(props) => (props.isLight ? '#000000' : '#ffffff')};
    transition-timing-function: ease-in-out;
    transition-property: background, color;
    transition-duration: 0.15s;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 300;
  }

  #root {
    flex-direction: column;
    display: flex;
  }
`;
