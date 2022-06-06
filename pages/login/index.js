import { Form, Container, Input } from "./styles";

const LogIn = () => {
	return (
		<>
			<Container>
				<h2>Log In</h2>

				<Form action="/send-data-here" method="post">
					<Input>
						<label for="first">First name</label>
						<input type="text" id="first" name="first" />
					</Input>

					<Input>
						<label for="last">Last name</label>
						<input type="password" id="last" name="last" />
					</Input>

					<button type="submit">Submit</button>
				</Form>
			</Container>
		</>
	);
};

export default LogIn;
