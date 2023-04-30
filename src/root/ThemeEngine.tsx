import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { ColorScheme } from '@/types';
import { Theme } from '@classes';
import { ThemeChangeEvent } from '@events';
import { Themes } from '@themes';

export function ThemeEngine({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(new Theme(Themes.Lavender, ColorScheme.LIGHT));

	useEffect(() => {
		document.addEventListener(ThemeChangeEvent.EVENT_NAME, event => {
			setTheme((event as ThemeChangeEvent).getTheme());
		});
	});

	return <ThemeProvider theme={theme.getTheme()}>{children}</ThemeProvider>;
}
