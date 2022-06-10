import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
const WhoIAm = ({ resume }) => {
	return (
		<div>
			<Title>Who am i</Title>
			<InputTxt type="text" value={resume} />
		</div>
	);
};

export default WhoIAm;
