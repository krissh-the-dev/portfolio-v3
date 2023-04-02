import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { ThemeChangeEvent } from '../events/ThemeChangeEvent';
import { Themes } from '../themes';
import { Theme } from '../classes/Theme';
import { ColorScheme } from '../types/Theme.type';

export function ThemeEngine({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(new Theme(Themes.Lavender, ColorScheme.LIGHT));

	useEffect(() => {
		document.addEventListener(ThemeChangeEvent.EVENT_NAME, event => {
			setTheme((event as ThemeChangeEvent).getTheme());
		});
	});

	return <ThemeProvider theme={theme.getTheme()}>{children}</ThemeProvider>;
}
