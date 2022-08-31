import Link from "next/link"

import { MenuUser } from "./_components"

export const Header = () => {
  return (
    <header
      className="
        flex px-8 
        bg-[#CAF0F8] 
        drop-shadow-lg h-24 
        animate-fade-in"
    >
      {/* Content header */}
      <div className="flex justify-between items-center w-[900px] m-auto">
        {/* Resumes link */}
        <Link href="home">
          {/* Logo */}
          <div
            className="text-5xl font-bold cursor-pointer"
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              color: "#0077B6",
            }}
          >
            Resumes
          </div>
        </Link>

        {/* User menu */}
        <MenuUser />
      </div>
    </header>
  )
}
