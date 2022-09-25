import { Title } from "../../common"
import { useHook_tools } from "../useHook_tools"
import { Categories } from "@Types"

export const Caparazon_category = ({
  category,
  title,
  children,
}: {
  category: Categories
  title: string
  children: React.ReactElement
}) => {
  const { handlers, handle_click_add, show_add_new_category } =
    useHook_tools(category)

  return (
    <div className="flex flex-col gap-[25px]">
      {/* Title */}
      <Title {...handlers}>
        {title}
        {show_add_new_category && (
          <div
            className="absolute top-[-100%] cursor-pointer"
            onClick={handle_click_add}
          >
            Add Experience
          </div>
        )}
      </Title>

      {/* Content */}
      {/* Education items */}
      {children}
    </div>
  )
}
