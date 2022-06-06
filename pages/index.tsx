import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
	font-size: 50px;
	//color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
	return (
		<Header>
			<h1>My page</h1>

			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/login">Log In</Link>
					</li>
					<li>
						<Link href="/register">Register</Link>
					</li>
				</ul>
			</nav>
		</Header>
	);
}
