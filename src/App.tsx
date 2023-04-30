import { ColorScheme } from '@/types';
import { Theme } from '@classes';
import { ThemeChangeEvent } from '@events';
import { Themes } from '@themes';

export function App() {
	const handleThemeChange = () => {
		const theme = new Theme(Themes.Lavender, ColorScheme.DARK);
		document.dispatchEvent(new ThemeChangeEvent(theme));
	};

	return (
		<>
			Hello
			<button onClick={handleThemeChange}>Click</button>
		</>
	);
}
