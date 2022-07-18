export const Item = ({ icon, name, path }: any) => {
  return (
    <div>
      {/* path */}
      <a href={path}>
        {/* icon */}
        <div>{icon}</div>
        {/* name */}
        <div>{name}</div>
      </a>
    </div>
  )
}
