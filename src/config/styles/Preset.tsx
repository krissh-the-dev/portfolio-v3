import { createGlobalStyle } from 'styled-components';
import { ColorScheme, ITheme } from '@/types';

export const Preset = createGlobalStyle<{ theme: ITheme[ColorScheme] }>`
  :root {
    --primary-color: ${props => props.theme.primary[0]};
    --secondary-color: ${props => props.theme.primary[1]};
    --background: ${props => props.theme.background};
    --text: ${props => props.theme.text};
  }

  html { font-size: 62.5%; }

  body {
    font-family: 'Product Sans';
    font-size: 1.6rem;

    background: var(--background);
    color: var(--text);
  }

  *, *::after, *::before { margin: 0; padding: 0; box-sizing: border-box; }
`;
