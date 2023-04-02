import { createGlobalStyle } from 'styled-components';
import { ProductSansFont } from '../assets/fonts';
import { ColorScheme, ITheme } from '../types/Theme.type';

const Presets = createGlobalStyle<{ theme: ITheme[ColorScheme] }>`
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

  h1 {
    color: var(--primary-color);
  }
`;

export function GlobalStyles() {
	return (
		<>
			<ProductSansFont />
			<Presets />
		</>
	);
}
