import { useState } from "react";
import { Form, Container, Message } from "./styles";
import Link from "next/link";
import LayoutPages from "../../components/layoutPages";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";

const LogIn = () => {
	const [formLogIn, setFormLogIn] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(`Email: ${formLogIn.email}, password: ${formLogIn.password}`);
	};

	const handleInputChange = (event) => {
		setFormLogIn({
			...formLogIn,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<>
			<LayoutPages>
				<Container>
					<h2>Log In</h2>

					<Form onSubmit={handleSubmit} method="post">
						<InputGroup>
							<label htmlFor="first">Email</label>
							<input
								type="text"
								id="first"
								onChange={handleInputChange}
								required
								name="email"
							/>
						</InputGroup>

						<InputGroup>
							<label htmlFor="last">password</label>
							<Message>
								<Link href={"/forgotPassword"}>Forgot password?</Link>
							</Message>
							<input
								type="password"
								id="last"
								required
								onChange={handleInputChange}
								name="password"
							/>
						</InputGroup>

						<Button primary type="submit">
							Log in
						</Button>
					</Form>
					<Link href="/createAccount">
						<a>Or create account.</a>
					</Link>
				</Container>
			</LayoutPages>
		</>
	);
};

export default LogIn;
