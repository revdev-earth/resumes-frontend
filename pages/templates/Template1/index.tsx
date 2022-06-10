import { Template1Container, TopSection, BottomSection, Title } from "./styles";
import LayoutPages from "../../../components/LayoutPages";
import InputTxt from "../../../components/InputTxt";

import WhoIAm from "./_components/Who";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Social from "./_components/Social";

const data = {
	name: "",
	profecion: "Profecion",
	resume: "resume",
	experience: [
		{
			enterpriseName: "enterprise 1",
			date: "june- 2020",
			description: "Description",
		},
		{
			enterpriseName: "enterprise 2",
			date: "june- 2021",
			description: "Description",
		},
		{
			enterpriseName: "enterprise 3",
			date: "june- 2022",
			description: "Description",
		},
	],
	education: [
		{
			instituteName: "institute 1",
			courseName: "Engineering, System Engineering",
			date: "date",
			Description: "description",
		},
		{
			instituteName: "institute 2",
			courseName: "Engineering, System security",
			date: "date",
			Description: "description",
		},
		{
			instituteName: "institute 3",
			courseName: "Engineering, System software",
			date: "date",
			Description: "description",
		},
	],
	projects: [
		{ title: "proyect 1", description: "description", link: "#" },
		{ title: "proyect 2", description: "description", link: "#" },
		{ title: "proyect 3", description: "description", link: "#" },
	],
	skills: [
		{ title: "skill 1", years: 1 },
		{ title: "skill 1", years: 1 },
		{ title: "skill 1", years: 1 },
		{ title: "skill 1", years: 1 },
	],
	social: [
		{ title: "linkedin", link: "" },
		{ title: "Github", link: "" },
	],
};

const Template1 = () => {
	return (
		<LayoutPages>
			<Template1Container>
				<TopSection>
					<h3>Name</h3>
					<InputTxt type="text" value={data.profecion} />
				</TopSection>
				<BottomSection>
					<div>
						<WhoIAm resume={data.resume} />
						<Experience experience={data.experience} />
					</div>
					<div>
						<Projects projects={data.projects} />
						<Social social={data.social} />
					</div>
				</BottomSection>
			</Template1Container>
		</LayoutPages>
	);
};

export default Template1;
