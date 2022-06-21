import Header from "@components/Header"
import Button from "@components/Button"
import LinksUser from "@components/LinksUsers"
import TemplateList from "@components/TemplateList"
import { FirstSection, SecondSection, ThirdSection } from "./styles"

import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <FirstSection>
          <h4>
            Solo el 2% de las hojas de vida pasan, que tu hoja de vida sea de
            ese 2%
          </h4>
          <Button primary> Crear mi resume</Button>
          <div></div>
        </FirstSection>
        <SecondSection>
          <h3>Templates</h3>
          <ul>
            <TemplateList />
            <TemplateList />
            <TemplateList />
            <TemplateList />
            <TemplateList />
          </ul>
          <Link href="/templates">More Templates</Link>
        </SecondSection>
        <ThirdSection>
          <h3>Links Users</h3>
          <ul>
            <LinksUser />
            <LinksUser />
            <LinksUser />
          </ul>
        </ThirdSection>
      </main>
    </>
  )
}
