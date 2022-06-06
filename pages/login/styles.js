import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	padding: 50px 150px;
	width: 650px;
	background-color: ${({ theme }) => theme.colors.white1};
	text-align: center;
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
