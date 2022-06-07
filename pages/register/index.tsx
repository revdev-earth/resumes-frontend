import { Form, Container } from "./styles";
import Link from "next/link";
import LayoutPages from "../../components/layoutPages";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";

const Register = () => {
	return (
		<LayoutPages>
			<Container>
				<h2>Create account</h2>

				<Form action="/send-data-here" method="post">
					<InputGroup>
						<label htmlFor="first">User</label>
						<input type="text" id="first" name="first" />
					</InputGroup>

					<InputGroup>
						<label htmlFor="first">Email</label>
						<input type="email" id="first" name="first" />
					</InputGroup>

					<InputGroup>
						<label htmlFor="last">password</label>
						<input type="password" id="last" name="last" />
					</InputGroup>

					<Button primary type="submit">
						Create account
					</Button>
				</Form>
				<Link href="/login">
					<a>Or log in.</a>
				</Link>
			</Container>
		</LayoutPages>
	);
};

export default Register;
