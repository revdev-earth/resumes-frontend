import { Form, Container } from "./styles"
import { LayoutPages } from "@components"
import InputGroup from "@components/InputGroup"
import { Label } from "@components/InputGroup/Label"

export const ForgotPassword = () => {
  return (
    <LayoutPages>
      <div className="m-auto">
        <Container>
          <h2>Recover password</h2>

          <p>Don&apos;t worry, happends to the best of us.</p>

          <Form action="/send-data-here" method="post">
            <InputGroup>
              <Label forlabel="first" title="Your Email" />
              <input type="text" id="first" name="first" />
            </InputGroup>

            <button type="submit">Send</button>
          </Form>
        </Container>
      </div>
    </LayoutPages>
  )
}
