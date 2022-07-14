import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMouseEnter = () => {
    setShowMenu(true)
    console.log(":: entra?")
  }

  const handleMouseLeave = () => {
    setShowMenu(false)
  }

  const commonEvents = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }

  return (
    <header className="flex justify-between items-center px-24 bg-[#CAF0F8] drop-shadow-lg">
      <Link href="/">
        <div
          className="p-5 pl-0 text-5xl font-bold cursor-pointer"
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: "#0077B6",
          }}
        >
          Resumes
        </div>
      </Link>

      <nav>
        <div
          className="w-16 h-16 bg-slate-400 rounded-full cursor-pointer"
          {...commonEvents}
        />
        {showMenu && (
          <div className="z-10 absolute" {...commonEvents}>
            <div className="z-[-1] absolute bottom-2 w-20 h-20 bg-transparent cursor-pointer" />
            <div className="flex flex-col gap-4 p-3">
              <Link href="/login">Log In</Link>
              <Link href="/create_account">Register</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
