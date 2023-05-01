import styled from 'styled-components';
import { Button } from '@components/elements';
import { CenterContainer, PaddingContainer } from '@components/layouts';
import { ColorScheme } from '@/types';
import { Theme } from '@classes';
import { ThemeChangeEvent } from '@events';
import { Themes } from '@themes';

export function Hero() {
	const handleThemeChange = () => {
		const theme = new Theme(Themes.Lavender, ColorScheme.DARK);
		document.dispatchEvent(new ThemeChangeEvent(theme));
	};

	const HeroStyles = styled(CenterContainer)`
		p {
			font-size: 1.6rem;
			font-weight: bold;
			margin-bottom: 2rem;
		}
	`;

	return (
		<PaddingContainer>
			<HeroBigText>KRIϟϟH</HeroBigText>
			<HeroStyles>
				<h1>Krishna Moorthy</h1>
				<p>Passionate software developer</p>
				<Button onClick={handleThemeChange}>Resume</Button>
			</HeroStyles>
		</PaddingContainer>
	);
}

const HeroBigText = styled.span`
	font-size: 40rem;
	z-index: -1;
	opacity: 0.05;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
