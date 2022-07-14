import Header from "@components/Header"
import Button from "@components/Button"
import LinksUser from "@components/LinksUsers"
import TemplateList from "@components/TemplateList"
import { FirstSection, SecondSection, ThirdSection } from "./styles"

import Link from "next/link"

export const Home = () => (
  <>
    <Header />

    <main>
      <FirstSection>
        <div style={{ fontSize: 7 * 8 }}>
          Solo el 2% de las hojas de vida pasan, que tu hoja de vida sea de ese
          2%
        </div>
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
        <Link href="/templates">
          <Button primary>More Templates</Button>
        </Link>
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
