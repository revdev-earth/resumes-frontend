import { InputTxtContainer } from "./styles";

export type InputProps = {
	type?: "text" | "textarea" | "date";
	title?: boolean;
	text?: boolean;
	date?: boolean;
	value?: string;
};

const InputTxt = ({ type = "text", ...arg }) => {
	console.log(`Title ${arg.title}`);
	return <InputTxtContainer type={type} {...arg} />;
};

export default InputTxt;
