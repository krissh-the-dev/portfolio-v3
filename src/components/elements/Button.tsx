import styled from 'styled-components';

export function Button({
	children,
	href,
	icon,
	onClick
}: ButtonProps & React.HTMLProps<HTMLButtonElement>) {
	const handleClick = (
		evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		onClick?.(evt);
		if (href != null) {
			window.open(href, '_blank');
		}
	};

	return (
		<StyledButton onClick={handleClick}>
			{icon && <span>{icon}</span>}
			{children}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	font-size: 1.4rem;
	font-family: inherit;
	background-color: transparent;
	color: var(--contrast-color);
	border: none;
	border: 2px solid currentColor;
	border-radius: 4rem;
	padding: 0.6rem 2rem;
	text-transform: uppercase;
	cursor: pointer;
`;

export interface ButtonProps {
	icon?: string;
}
