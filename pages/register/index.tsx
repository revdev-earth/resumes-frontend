import { Form, Container } from "./styles";
import Link from "next/link";
import LayoutPages from "../../components/layoutPages";
import InputGroup from "../../components/InputGroup";

const Register = () => {
	return (
		<LayoutPages>
			<Container>
				<h2>Create account</h2>

				<Form action="/send-data-here" method="post">
					<InputGroup>
						<label for="first">User</label>
						<input type="text" id="first" name="first" />
					</InputGroup>

					<InputGroup>
						<label for="first">Email</label>
						<input type="email" id="first" name="first" />
					</InputGroup>

					<InputGroup>
						<label for="last">password</label>
						<input type="password" id="last" name="last" />
					</InputGroup>

					<button type="submit">Create account</button>
				</Form>
				<Link href="/login">
					<p>Or log in.</p>
				</Link>
			</Container>
		</LayoutPages>
	);
};

export default Register;
