import { ItemProject } from "./styles";
import { Title } from "../../styles";
import LinkTitle from "../../../../../components/LinkTitle";
import TextoEditable from "../../../../../components/TextoEditable";

const Projects = ({ projects }) => {
	return (
		<div>
			<Title>Projects</Title>
			<div>
				{projects.map(({ title, description }) => (
					<ItemProject>
						<LinkTitle title="title">{title}</LinkTitle>
						<TextoEditable txt={description} />
					</ItemProject>
				))}
			</div>
		</div>
	);
};

export default Projects;
