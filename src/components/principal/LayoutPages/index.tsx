import { Header } from "@components"

export const LayoutPages = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex h-full grow bg-neutral-100">{children}</main>
    </>
  )
}
