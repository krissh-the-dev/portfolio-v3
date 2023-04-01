export type Theme = {
	[scheme in ColorScheme]: {
		primary: ColorShades;
		background: Color;
	};
};

export type ColorShades = [Color, Color];
export type ColorScheme = 'light' | 'dark';
export type Color = string;
