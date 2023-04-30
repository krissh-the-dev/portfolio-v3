import { ProductSansFont } from '@assets/fonts';
import { Preset, Typography } from './styles';

export function GlobalStyles() {
	return (
		<>
			<ProductSansFont />
			<Preset />
			<Typography />
		</>
	);
}
