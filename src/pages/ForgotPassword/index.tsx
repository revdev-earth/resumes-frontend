import { Form, Container } from "./styles"
import { LayoutPages } from "@components"
import { Field } from "@components"

export const ForgotPassword = () => {
  return (
    <LayoutPages>
      <div className="m-auto">
        <Container>
          <h2>Recover password</h2>

          <p>Don&apos;t worry, happends to the best of us.</p>

          <Form action="/send-data-here" method="post">
            <Field name="email" label="Email" type="email" required />

            <button type="submit">Send</button>
          </Form>
        </Container>
      </div>
    </LayoutPages>
  )
}
