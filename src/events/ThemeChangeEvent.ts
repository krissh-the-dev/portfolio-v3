import { Theme } from '@classes';

export class ThemeChangeEvent extends Event {
	readonly #theme: Theme;

	constructor(theme: Theme) {
		super(ThemeChangeEvent.name, { bubbles: true, cancelable: false });
		this.#theme = theme;
	}

	getTheme() {
		return this.#theme;
	}
}
