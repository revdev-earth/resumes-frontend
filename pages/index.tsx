import Header from "../components/Header";
import Button from "../components/Button";
import { FirstSection, SecondSection } from "./styles";

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
				<SecondSection>
					<h3>Templates</h3>
					<ul>
						<li>
							<p>1</p>
							<Button primary>Usar!</Button>
						</li>
						<li>
							<p>2</p>
							<Button primary>Usar!</Button>
						</li>
						<li>
							<p>3</p>
							<Button primary>Usar!</Button>
						</li>
						<li>
							<p>4</p>
							<Button primary>Usar!</Button>
						</li>
						<li>
							<p>5</p>
							<Button primary>Usar!</Button>
						</li>
					</ul>
				</SecondSection>
			</main>
		</>
	);
}
