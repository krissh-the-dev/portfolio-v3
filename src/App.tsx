import { Theme } from './config/Theme';
import { ThemeChangeEvent } from './events/ThemeChangeEvent';
import { Themes } from './themes';
import { ColorScheme } from './types/Theme.type';

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
