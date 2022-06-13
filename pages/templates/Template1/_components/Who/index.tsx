import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
import { WhoIamcontainer } from "./styles";

const WhoIAm = ({ resume }) => {
	return (
		<WhoIamcontainer>
			<Title>Who am i</Title>
			<textarea value={resume} />
		</WhoIamcontainer>
	);
};

export default WhoIAm;
