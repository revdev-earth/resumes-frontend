import { useSelector } from "@redux"

//  import Tempaltes
import { Template1 } from "@pages/Templates/template1"
import { Template2 } from "@pages/Templates/template2"

export const Resume = () => {
  const actual_template = useSelector((s) => s.app.templates.actual)

  if (actual_template === "template1") return <Template1 />
  if (actual_template === "template2") return <Template2 />

  return null
}
