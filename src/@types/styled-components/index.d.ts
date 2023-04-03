import { ThemeValues } from '@/types';
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeValues {}
}
