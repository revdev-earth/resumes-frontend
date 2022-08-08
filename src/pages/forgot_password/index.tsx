import { LayoutPages } from "@components"
import { Field } from "@components"
import { Button } from "@components"

export const ForgotPassword = () => {
  return (
    <LayoutPages>
      <div className="m-auto">
        <div
          className="
          flex flex-col gap-5
          px-[50px] py-[90px] w[650px] 
          rounded-3xl shadow-button-primary "
        >
          <h2>Recover password</h2>

          <p>Don&apos;t worry, happends to the best of us.</p>

          <form action="/send-data-here" className="flex flex-col align-center">
            <Field name="email" label="Email" type="email" required />

            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </LayoutPages>
  )
}
