import { Form, Container } from "./styles";
import LayoutPages from "@components/LayoutPages";
import InputGroup from "@components/InputGroup";

const ForgotPassword = () => {
  return (
    <LayoutPages>
      <Container>
        <h2>Recover password</h2>

        <p>Don't worry, happends to the best of us.</p>

        <Form action="/send-data-here" method="post">
          <InputGroup>
            <label for="first">Your Email</label>
            <input type="text" id="first" name="first" />
          </InputGroup>

          <button type="submit">Send</button>
        </Form>
      </Container>
    </LayoutPages>
  );
};

export default ForgotPassword;
