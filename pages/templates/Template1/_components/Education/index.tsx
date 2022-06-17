import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
import { ItemEducation } from "./styles";
import TextoEditable from "../../../../../components/TextoEditable";

const Education = ({ education }) => {
	return (
		<div>
			<Title>Education</Title>
			<ul>
				{education.map(({ instituteName, courseName, date, description }) => {
					console.log("institute: ", description);
					return (
						<ItemEducation>
							<InputTxt type="text" title value={instituteName} />
							<div>
								<InputTxt type="text" text value={courseName} />
								<InputTxt type="date" value={date} />
							</div>
							<TextoEditable txt={description} />
						</ItemEducation>
					);
				})}
			</ul>
		</div>
	);
};

export default Education;
