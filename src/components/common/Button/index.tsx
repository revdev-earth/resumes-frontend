//? Propiedades del coponente boton
export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset"
  primary?: boolean
  secondary?: boolean
  black?: boolean
}

export const Button = ({ type, children, ...arg }: IButton) => {
  return (
    <button
      className={`
        flex justify-center items-center
        text-lg p-[20px] text-center
        outline-0 rounded-lg  shadow-button-primary
        transition-all cursor-pointer
      `}
      type={type ? type : "button"}
      {...arg}
    >
      {children}
    </button>
  )
}
