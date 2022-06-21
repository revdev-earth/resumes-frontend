import { ButttonSelection } from "./styles"

//? Propiedades del coponente boton
export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset"
  primary?: boolean
  secondary?: boolean
  black?: boolean
}

//? Componente boton
const Button = ({ type = "button", children, ...arg }: IButton) => (
  <ButttonSelection type={type} {...arg}>
    {children}
  </ButttonSelection>
)

export default Button
