export type ITheme = {
	[scheme in ColorScheme]: ThemeValues;
};

export interface ThemeValues {
	primary: ColorShades;
	background: Color;
	text: Color;
}

export type ColorShades = [Color, Color];
export type Color = string;

export enum ColorScheme {
	LIGHT = 'light',
	DARK = 'dark'
}
