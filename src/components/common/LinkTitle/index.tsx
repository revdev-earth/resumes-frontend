import { Editable } from "@components"

import LinkImage from "@public/assets/link.svg"

export const LinkTitle = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="flex items-center gap-0 mt-15px pl-1  cursor-pointer ">
      <LinkImage className="h-6" alt={link} layout="fill" />
      <Editable stylesText="text-[24px] font-semibold" value={title} />
    </div>
  )
}
