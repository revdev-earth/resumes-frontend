import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
const Skills = ({ resume }) => {
	return (
		<div>
			<Title>Who am i</Title>
			<InputTxt type="text" value={resume} />
		</div>
	);
};

export default Skills;
