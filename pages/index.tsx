import Header from "../components/Header";
import Button from "../components/Button";
import { FirstSection } from "./styles";

export default function Home() {
	return (
		<>
			<Header />

			<main>
				<FirstSection>
					<h4>
						Solo el 2% de las hojas de vida pasan, que tu hoja de vida sea de
						ese 2%
					</h4>
					<Button primary> Crear mi resume</Button>
					<div></div>
				</FirstSection>
			</main>
		</>
	);
}
