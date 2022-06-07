import styled from "styled-components";

export const ContainerButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px 20px;
	min-width: 150px;
	height: 60px;
	background-color: ${({ theme }) => theme.colors.wuite2};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
		inset 0px -1px 4px rgba(0, 0, 0, 0.25),
		inset 0px 4px 4px rgba(255, 255, 255, 0.25);
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
			inset 0px -2px 4px rgba(0, 0, 0, 0.25),
			inset 0px 5px 5px rgba(255, 255, 255, 0.25);
	}

	&:active {
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25),
			inset 0px -0px 2px rgba(0, 0, 0, 0.25),
			inset 0px 2px 2px rgba(255, 255, 255, 0.25);
	}
`;
