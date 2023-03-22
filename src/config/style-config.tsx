import { createGlobalStyle } from 'styled-components';
import { ProductSansFont } from '../assets/fonts';

const Presets = createGlobalStyle`
  html { font-size: 62.5%; }

  body {
    font-family: 'Product Sans';
    font-size: 1.6rem;
  }

  *, *::after, *::before { margin: 0; padding: 0; box-sizing: border-box; }
`;

export function GlobalStyles() {
	return (
		<>
			<ProductSansFont />
			<Presets />
		</>
	);
}
