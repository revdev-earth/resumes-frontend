import { LinkUserContainer, Content } from "./styles";
import Button from "../Button";

//*Images
import user from "../../public/assets/user.svg";
import { useState } from "react";

const LinksUser = () => {
	const [all, setAll] = useState(false);

	return (
		<LinkUserContainer all={all}>
			<img src="/assets/user.svg" alt="Img user" />
			<Content all={all}>
				<h4>Nombre</h4>
				<ul>
					<li>
						<a>
							<img src="/assets/linkedin.svg" />
						</a>
					</li>
					<li>
						<a>
							<img src="/assets/github.svg" />
						</a>
					</li>
				</ul>
				<Button primary>resume</Button>
			</Content>
			<div onClick={() => setAll(!all)}>
				<img src="" alt="" />
			</div>
		</LinkUserContainer>
	);
};

export default LinksUser;
