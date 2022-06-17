import { Title } from "../../styles";
import { WhoIamcontainer } from "./styles";
import TextoEditable from "../../../../../components/TextoEditable";

const WhoIAm = ({ resume }) => {
	return (
		<WhoIamcontainer>
			<Title>Who am i</Title>
			<TextoEditable txt={resume} />
		</WhoIamcontainer>
	);
};

export default WhoIAm;
