export const Label = ({ title, ...arg }) => {
  return (
    <label className=" top-0 left-0 text-base origin-left" {...arg}>
      {title}
    </label>
  )
}
