import { ItemSkill } from "./styles";

import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
const Skills = ({ skills }) => {
	console.log("skills: ", skills);
	return (
		<div>
			<Title>Skills</Title>
			<ul>
				{skills.map(({ title, years }) => (
					<ItemSkill>
						<InputTxt type="text" value={title} />
						<div>
							<InputTxt type="text" value={years} />
							years
						</div>
					</ItemSkill>
				))}
			</ul>
		</div>
	);
};

export default Skills;
