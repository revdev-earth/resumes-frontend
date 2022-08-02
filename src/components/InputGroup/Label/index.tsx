export const Label = ({ forlabel, title }) => {
  return (
    <label htmlFor={forlabel} className=" top-0 left-0 text-base origin-left">
      {title}
    </label>
  )
}
