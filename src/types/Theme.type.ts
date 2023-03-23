export type Theme = {
	[scheme in ColorScheme]: {
		primary: ColorShades;
		secondary: ColorShades;
		background: ColorShades;
	};
};

export type ColorShades = [string, string, string];
export type ColorScheme = 'light' | 'dark';
