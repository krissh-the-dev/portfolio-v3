import { ThemeChangeEvent } from './events/ThemeChangeEvent';
import { LavenderTheme } from './themes';

export function App() {
	return (
		<>
			Hello
			<button onClick={() => document.dispatchEvent(new ThemeChangeEvent(LavenderTheme))}>Click</button>
		</>
	);
}
