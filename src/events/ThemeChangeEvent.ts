import { Theme } from '../types/Theme.type';

export class ThemeChangeEvent extends Event {
	public static EVENT_NAME = ThemeChangeEvent.name;
	readonly #theme: Theme;

	constructor(theme: Theme) {
		super(ThemeChangeEvent.EVENT_NAME, { bubbles: true, cancelable: false });
		this.#theme = theme;
	}

	getTheme() {
		return this.#theme;
	}
}
