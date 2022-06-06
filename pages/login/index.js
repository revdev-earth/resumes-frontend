import { Form, Container, Input, Message } from "./styles";
import Link from "next/link";
import LayoutPages from "../../components/layoutPages";
import InputGroup from "../../components/InputGroup";

const LogIn = () => {
	return (
		<>
			<LayoutPages>
				<Container>
					<h2>Log In</h2>

					<Form action="/send-data-here" method="post">
						<InputGroup>
							<label for="first">Email</label>
							<input type="text" id="first" name="first" />
						</InputGroup>

						<InputGroup>
							<label for="last">password</label>
							<Message>
								<Link href={"/forgotPassword"}>Forgot password?</Link>
							</Message>
							<input type="password" id="last" name="last" />
						</InputGroup>

						<button type="submit">Submit</button>
					</Form>
					<Link href="/register">
						<p>Or create account.</p>
					</Link>
				</Container>
			</LayoutPages>
		</>
	);
};

export default LogIn;
