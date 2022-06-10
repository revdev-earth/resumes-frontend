import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
const Education = ({ resume }) => {
	return (
		<div>
			<Title>Who am i</Title>
			<InputTxt type="text" value={resume} />
		</div>
	);
};

export default Education;
