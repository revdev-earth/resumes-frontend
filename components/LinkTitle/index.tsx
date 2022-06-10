import { LinkTitleContainer } from "./styles";

const LinkTitle = ({ children }) => {
	return (
		<LinkTitleContainer>
			<img src="/assets/link.svg" alt="" />
			<h5>{children}</h5>
		</LinkTitleContainer>
	);
};

export default LinkTitle;
