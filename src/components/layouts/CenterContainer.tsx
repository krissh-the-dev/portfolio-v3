import styled from 'styled-components';

export const CenterContainer = styled.div<{ height?: string }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: ${({ height }) => height ?? '100vh'};
`;
