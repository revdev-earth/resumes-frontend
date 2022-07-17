import { Header } from "@components"

export const LayoutPages = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex h-full grow">{children}</main>
    </>
  )
}
