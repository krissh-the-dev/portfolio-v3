import { PaddingContainer } from '@/components/layouts';
import { ColorScheme } from '@/types';
import { Theme } from '@classes';
import { ThemeChangeEvent } from '@events';
import { Themes } from '@themes';

export function Hero() {
	const handleThemeChange = () => {
		const theme = new Theme(Themes.Lavender, ColorScheme.DARK);
		document.dispatchEvent(new ThemeChangeEvent(theme));
	};

	return (
		<PaddingContainer>
			Hello
			<button onClick={handleThemeChange}>Click</button>
		</PaddingContainer>
	);
}
