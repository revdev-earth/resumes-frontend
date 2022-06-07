import { Form, Container, Message } from "./styles";
import Link from "next/link";
import LayoutPages from "../../components/layoutPages";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";

const LogIn = () => {
	return (
		<>
			<LayoutPages>
				<Container>
					<h2>Log In</h2>

					<Form action="/send-data-here" method="post">
						<InputGroup>
							<label htmlFor="first">Email</label>
							<input type="text" id="first" name="first" />
						</InputGroup>

						<InputGroup>
							<label htmlFor="last">password</label>
							<Message>
								<Link href={"/forgotPassword"}>Forgot password?</Link>
							</Message>
							<input type="password" id="last" name="last" />
						</InputGroup>

						<Button primary type="submit">
							Log in
						</Button>
					</Form>
					<Link href="/register">
						<a>Or create account.</a>
					</Link>
				</Container>
			</LayoutPages>
		</>
	);
};

export default LogIn;
