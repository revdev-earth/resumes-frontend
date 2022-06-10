import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
const Experience = ({ experience }) => {
	return (
		<div>
			<Title>Experience</Title>
			<ul>
				{experience.map(({ enterpriseName, date, description }) => {
					return (
						<>
							<InputTxt type="text" title value={enterpriseName} />
							<InputTxt type="date" date value={date} />
							<InputTxt type="textarea" text value={description} />
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default Experience;
