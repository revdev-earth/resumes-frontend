import { useEffect, useRef, useState } from "react";
import LayoutPages from "../../components/LayoutPages";
import { Content, EditarTxt } from "./styles";

const Prototipes = () => {
	const [texto, setTexto] = useState(
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae corporis excepturi quaerat ex aliquid, dicta ullam. Ab adipisci minus error inventore quam cumque ipsa excepturi pariatur."
	);

	const [editar, setEditar] = useState(false);

	const textoRef = useRef();
	const heightTxt = textoRef?.current?.clientHeight;

	const handleInputChange = (event) => {
		setTexto(event.target.value);
	};

	const editorChange = () => {
		setEditar(!editar);
	};

	return (
		<LayoutPages>
			<Content>
				<h2>Prototipes</h2>
				<div>
					{editar ? (
						<p ref={textoRef}>
							{texto}{" "}
							<img
								src="/assets/pen-to-square-solid.svg"
								onClick={editorChange}
							/>{" "}
						</p>
					) : (
						<EditarTxt heightTxt={heightTxt}>
							<img src="/assets/check-solid.svg" onClick={editorChange} />
							<textarea value={texto} onChange={handleInputChange} />
						</EditarTxt>
					)}
				</div>
			</Content>
		</LayoutPages>
	);
};

export default Prototipes;
