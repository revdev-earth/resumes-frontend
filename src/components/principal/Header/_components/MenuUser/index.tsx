import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "@redux/store"

import { api_reset } from "@redux/api"
import { delete_token } from "@redux/slices"

const Logout = () => {
  const dispatch = useDispatch()

  const { token, role } = useSelector((s) => s.app.auth)

  if (role === "reader") return null

  if (!token) return null

  return (
    <div
      className="text-lg cursor-pointer"
      onClick={() => {
        dispatch(api_reset())
        dispatch(delete_token())
      }}
    >
      log out
    </div>
  )
}

export const MenuUser = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [run_animation_out, set_run_animation_out_state] = useState(false)

  const handleMouseEnter = () => {
    if (!showMenu) {
      set_run_animation_out_state(false)
      setShowMenu(true)
    }
  }

  const handleMouseLeave = () => {
    set_run_animation_out_state(true)

    setTimeout(() => {
      setShowMenu(false)
      set_run_animation_out_state(false)
    }, 250)
  }

  const commonEvents = {
    onMouseMove: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }

  /* User menu */

  return (
    <div className="relative pr-1" {...commonEvents}>
      {/* Perfil */}
      <div
        className="w-16 h-16 bg-[#D9D9D9] rounded-full cursor-pointer"
        style={{
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 4px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* Menu */}
      {showMenu && (
        <nav
          className={`
          animate-fade-in
          ${run_animation_out && "animate-fade-out"}
          absolute left-[-31%] top-1/2 pt-10
          `}
          {...commonEvents}
        >
          <div
            className="
            flex flex-col gap-4 p-3 
            border-1 drop-shadow-xl bg-white 
            rounded min-w-[100px]
            text-[29px] text-center
            "
          >
            <Link href="/login">Log In</Link>
            <Link href="/sing_up">Sing up</Link>
            <Logout />
          </div>
        </nav>
      )}
    </div>
  )
}
