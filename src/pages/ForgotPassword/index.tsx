import { Form, Container } from "./styles"
import { LayoutPages } from "@components"
import InputGroup from "@components/InputGroup"
import { Label } from "@components/InputGroup/Label"
import { Input } from "@components/InputGroup/Input"

export const ForgotPassword = () => {
  return (
    <LayoutPages>
      <div className="m-auto">
        <Container>
          <h2>Recover password</h2>

          <p>Don&apos;t worry, happends to the best of us.</p>

          <Form action="/send-data-here" method="post">
            <InputGroup>
              <Label htmlFor="first" title="Email" />
              <Input type="text" inputId="first" nameInput="first" />
            </InputGroup>

            <button type="submit">Send</button>
          </Form>
        </Container>
      </div>
    </LayoutPages>
  )
}
