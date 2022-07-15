import Link from "next/link"
import { useState } from "react"

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMouseEnter = () => {
    setShowMenu(true)
  }

  const handleMouseLeave = () => {
    setShowMenu(false)
  }

  const commonEvents = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }

  return (
    <header className="flex justify-between items-center px-24 bg-[#CAF0F8] drop-shadow-lg h-24">
      <Link href="/">
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

      <div className="relative">
        {/* Perfil */}
        <div
          className="w-16 h-16 bg-slate-400 rounded-full cursor-pointer"
          {...commonEvents}
        />

        {/* Menu */}
        {showMenu && (
          <nav className="absolute left-[-12%]" {...commonEvents}>
            <div className="flex flex-col gap-4 p-3 bg-white drop-shadow-xl rounded animate-fade-in">
              <Link href="/login">Log In</Link>
              <Link href="/create_account">Register</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
