import { EditableTitleLink } from "@components"

import LinkImage from "@public/assets/link.svg"

export const LinkTitle = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="relative flex items-center gap-0 mt-15px pl-1  cursor-pointer ">
      <LinkImage className="h-6" alt={link} layout="fill" />
      <EditableTitleLink
        stylesText="text-[24px] font-semibold "
        content={title}
        link={link}
      />
    </div>
  )
}
