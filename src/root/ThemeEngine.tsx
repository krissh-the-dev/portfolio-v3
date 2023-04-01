import { ThemeProvider } from 'styled-components';
import { Theme } from '../types/Theme.type';
import { useEffect, useState } from 'react';
import { ThemeChangeEvent } from '../events/ThemeChangeEvent';
import { LavenderTheme } from '../themes';

export function ThemeEngine({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(LavenderTheme);

	useEffect(() => {
		document.addEventListener(ThemeChangeEvent.EVENT_NAME, event => {
			setTheme((event as ThemeChangeEvent).getTheme());
		});
	});

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
