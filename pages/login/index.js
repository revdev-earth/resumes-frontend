import { Form, Container, Input, Message } from "./styles";
import Link from "next/link";
import LayoutPages from "../../components/layoutPages";

const LogIn = () => {
	return (
		<>
			<LayoutPages>
				<Container>
					<h2>Log In</h2>

					<Form action="/send-data-here" method="post">
						<Input>
							<label for="first">First name</label>
							<input type="text" id="first" name="first" />
						</Input>

						<Input>
							<label for="last">Last name</label>
							<Message>
								<Link href={"/forgotPassword"}>Forgot password?</Link>
							</Message>
							<input type="password" id="last" name="last" />
						</Input>

						<button type="submit">Submit</button>
					</Form>
				</Container>
			</LayoutPages>
		</>
	);
};

export default LogIn;
