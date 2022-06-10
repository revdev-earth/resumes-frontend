import InputTxt from "../../../../../components/InputTxt";
import { Title } from "../../styles";
import LinkTitle from "../../../../../components/LinkTitle";

const Projects = ({ projects }) => {
	return (
		<div>
			<Title>Projects</Title>
			<div>
				{projects.map(({ title, description }) => (
					<>
						<LinkTitle title="title">{title}</LinkTitle>
						<InputTxt type="textarea" text value={description} />
					</>
				))}
			</div>
		</div>
	);
};

export default Projects;
