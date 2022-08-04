import { Editable } from "@components"

import LinkImage from "@public/assets/link.svg"

const LinkTitle = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="flex items-center gap-0 mt-15px pl-1  cursor-pointer ">
      <LinkImage className="h-6" alt={link} layout="fill" />
      <Editable value={title} />
    </div>
  )
}

export default LinkTitle
