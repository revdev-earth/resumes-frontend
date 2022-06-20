import { ItemSkill } from "./styles";

import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
const Skills = ({ skills }) => {
	return (
		<div>
			<Title>Skills</Title>
			<ul>
				{skills.map(({ title, years }) => (
					<ItemSkill key={Math.random() * 10}>
						<InputTxt type="text" txt={title} />
						<div>
							<InputTxt type="text" txt={years} />
							years
						</div>
					</ItemSkill>
				))}
			</ul>
		</div>
	);
};

export default Skills;
