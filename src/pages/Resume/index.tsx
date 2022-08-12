import { useSelector } from "@redux"

//  import Tempaltes
import { Template1 } from "@pages/Templates/template1"
import { Template2 } from "@pages/Templates/template2"
// import { useNotToken } from "@hooks/useNotToken"

import { useRouter } from "next/router"
import { useEffect } from "react"

export const Resume = () => {
  // Check token or push to home
  //useNotToken()

  const router = useRouter()
  const { user } = router.query

  // console.log("Resume: router query user ::", user)

  useEffect(() => {
    // Revisar user
    // Traer el usuario con resume y business_card
    // Mirar si tiene resume content
    // si no tiene content home pero tiene que mostrar un pop up primero
    // si existe el resume
    // mirar por templates en redux
    // si tiene actual template
    // utilizar nombre de template como nombre de la carpeta del template
    // is template no esta registrado en la lista de templates
    // entonces hay un error
    // como el usuario para llegar aca tiene que tener un template
    // entonces si no tiene token
    // se le mostrara un pop up que  dice Este usuario no tiene un template!
    // le mostraremos el template default
    // Agrergar a templates el template default
    // cargar el template
  }, [user])

  const actual_template = useSelector((s) => s.app.templates.actual)

  // tenemos templates?

  // Que pasa cuando no tiene un template
  // Necesitamos acceder a los templates
  // Traer un me

  if (actual_template === "template1") return <Template1 />
  if (actual_template === "template2") return <Template2 />

  return <div>Resume!</div>
}
