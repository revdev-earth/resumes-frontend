import styled from "styled-components";

export const ContainerInputGroup = styled.div`
	position: relative;

	label {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 16px;
		transform: translate(10px, 20px);
		transform-origin: left;
		transition: transform 0.25s;
		transform: translate(0, -20px) ;
	}

	input {
		margin-bottom: 40px;
		padding: 10px;
		width: 100%;
		height: 50px;
		background-color: transparent;
		outline: 1px solid #333;
		border-radius: 8px;
	}

	&:focus-within label ,
	&:active label {
		
	}

	&:focus-within input {
		//outline-color:;
	}
`;
