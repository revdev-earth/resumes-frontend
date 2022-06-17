import { InputTxtContainer } from "./styles";
import { useState, useEffect } from "react";

export type InputProps = {
	type?: "text" | "textarea" | "date";
	txt?: string;
	title?: boolean;
	text?: boolean;
	date?: boolean;
	value?: string;
};

const InputTxt = ({ type = "text", ...arg }) => {
	const [editar, setEditar] = useState(false);
	const [texto, setTexto] = useState("Description");

	const handleInputChange = (event) => {
		setTexto(event.target.value);
	};

	const editorChange = () => {
		setEditar(!editar);
	};

	return (
		<InputTxtContainer>
			{editar ? (
				<p>
					{texto}
					<img src="/assets/pen-to-square-solid.svg" onClick={editorChange} />
				</p>
			) : (
				<div>
					<input
						type={type}
						value={texto}
						{...arg}
						onChange={handleInputChange}
					/>
					<img src="/assets/check-solid.svg" onClick={editorChange} />
				</div>
			)}
		</InputTxtContainer>
	);
};

export default InputTxt;
