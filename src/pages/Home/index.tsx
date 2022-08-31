import { Footer, Header } from "@components"
import { Section1, Section2, Section3 } from "./_components"

export const Home = () => (
  <>
    <Header />

    <main className="animate-fade-in overflow-hidden">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>

    <Footer />
  </>
)
