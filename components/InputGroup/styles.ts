import styled from "styled-components";

export const ContainerInputGroup = styled.div`
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
		margin-bottom: 40px;
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
