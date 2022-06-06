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

export const Input = styled.div`
	position: relative;

	label {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(10px, 10px);
		transform-origin: left;
		transition: transform 0.25s;
	}

	input {
		margin-bottom: 30px;
		padding: 10px;
		width: 100%;
		background-color: transparent;
		outline: 1px solid #333;
		border-radius: 8px;
	}

	&:focus-within label {
		transform: translate(0, -20px) scale(0.8);
	}

	&:focus-within input {
		//outline-color:;
	}
`;

export const Message = styled.div`
	position: absolute;
	top: -20px;
	right: 0px; ;
`;
