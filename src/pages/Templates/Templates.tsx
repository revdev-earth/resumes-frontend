import { LayoutPages } from "@components"
import TemplateList from "@components/TemplateList"

export const Templates = () => {
  return (
    <LayoutPages>
      <div className="flex flex-col text-center p-[50px] gap-[30px] justy">
        <h2>Templates</h2>
        <div className="flex flex-wrap justify-center gap-[30px]">
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
          <TemplateList />
        </div>
      </div>
    </LayoutPages>
  )
}
