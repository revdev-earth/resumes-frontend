import { HeaderContainer } from "./styles";
import Link from "next/link";

const Header = () => {
	return (
		<HeaderContainer>
			<Link href="/">
				<a>
					<h1>Resumes</h1>
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/login">Log In</Link>
					</li>
					<li>
						<Link href="/createAccount">Register</Link>
					</li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};

export default Header;
