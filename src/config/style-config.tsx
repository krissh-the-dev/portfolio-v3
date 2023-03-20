import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html { font-size: 62.5%; }

  body { font-size: 1.6rem; }

  *, *::after, *::before { margin: 0; padding: 0; box-sizing: border-box; }
`;
