import { InputTxtContainer } from "./styles";
import { useState, useEffect } from "react";

export type InputProps = {
	type?: "text" | "textarea" | "date" | "number";
	txt?: string;
	title?: boolean;
	text?: boolean;
	date?: boolean;
	value?: string;
	number?: number;
};

const InputTxt = ({ type = "text", txt, ...arg }) => {
	const [editar, setEditar] = useState(false);
	const [texto, setTexto] = useState("");

	useEffect(() => {
		setTexto(txt);
	}, [texto]);

	const handleInputChange = (event) => {
		setTexto(event.target.value);
	};

	const editorChange = () => {
		setEditar(!editar);
	};

	return (
		<InputTxtContainer {...arg}>
			{editar ? (
				<div>
					<input
						type={type}
						value={texto}
						{...arg}
						onChange={handleInputChange}
					/>
					<img src="/assets/check-solid.svg" onClick={editorChange} />
				</div>
			) : (
				<p>
					{texto}
					<img src="/assets/pen-to-square-solid.svg" onClick={editorChange} />
				</p>
			)}
		</InputTxtContainer>
	);
};

export default InputTxt;
