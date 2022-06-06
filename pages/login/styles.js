import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	padding: 50px 150px;
	width: 650px;
	background-color: ${({ theme }) => theme.colors.white2};
	text-align: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
		inset 0px -4px 4px rgba(0, 0, 0, 0.25),
		inset 0px 3px 3px rgba(255, 255, 255, 0.25);
	border-radius: 24px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Message = styled.div`
	position: absolute;
	top: -20px;
	right: 0px; ;
`;
