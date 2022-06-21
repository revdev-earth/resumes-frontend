import { ContainerButton } from "./styles"

//? Propiedades del coponente boton
export type ButtonProps = {
  type?: "button" | "submit" | "reset"
  children?: React.ReactNode
  primary?: boolean
  black?: boolean
}

//? Componente boton
const Button = ({ type = "button", children, ...arg }: ButtonProps) => (
  <ContainerButton type={type} {...arg}>
    {children}
  </ContainerButton>
)

export default Button
