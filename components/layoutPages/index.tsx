import { Container } from "./styles";
import Header from "../Header";

const LayoutPages = ({ children }) => {
	return (
		<Container>
			<Header />
			<main>{children}</main>
		</Container>
	);
};

export default LayoutPages;
