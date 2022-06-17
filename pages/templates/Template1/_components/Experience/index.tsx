import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
import { ExperienceContainer, ItemExperience } from "./styles";
import TextoEditable from "../../../../../components/TextoEditable";

const Experience = ({ experience }) => {
	return (
		<ExperienceContainer>
			<Title>Experience</Title>
			<ul>
				{experience.map(({ enterpriseName, date, description }) => {
					return (
						<ItemExperience>
							<InputTxt type="text" title value={enterpriseName} />
							<input type="date" value={date} />
							<TextoEditable txt={description} />
						</ItemExperience>
					);
				})}
			</ul>
		</ExperienceContainer>
	);
};

export default Experience;
