import { ITheme, ColorScheme } from '@/types/Theme.type';

export class Theme {
	#theme: ITheme;
	#colorScheme: ColorScheme;

	constructor(theme: ITheme, colorScheme: ColorScheme) {
		this.#theme = theme;
		this.#colorScheme = colorScheme;
	}

	setTheme(theme: ITheme) {
		this.#theme = theme;
	}

	setColorScheme(colorScheme: ColorScheme) {
		this.#colorScheme = colorScheme;
	}

	getTheme() {
		return this.#theme[this.#colorScheme];
	}
}
