import styled from "styled-components";

export const Container = styled.div`

	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.white1};

	main {
		display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 80px);
	}
`;
